import {
  applicationName,
  refreshTokenTimeoutInSeconds as settingsRefreshTokenTimeoutInSeconds,
} from '../../../core/settings'
import {
  SavedAuthStructureType,
  AuthStructureType,
  ResponseAuthStructureType,
} from './types'
import { differenceInSeconds } from 'date-fns'
import axios, { AxiosError, AxiosInstance } from 'axios'
class AuthController {
  private tokensSaveKey: string
  private refreshTokenTimeoutInSeconds: number

  constructor(
    refreshTokenTimeoutInSeconds: number,
    applicationName: string,
    authSaveKeyName: string = 'auth',
  ) {
    this.tokensSaveKey = `@${applicationName}-${authSaveKeyName}`
    this.refreshTokenTimeoutInSeconds = refreshTokenTimeoutInSeconds
  }

  private getAuthorizationHeaderFromAccessToken(accessToken: string) {
    return `Bearer ${accessToken}`
  }

  private setAuthHeader(
    client: AxiosInstance,
    authInstance: AuthStructureType,
  ) {
    client.defaults.headers.common.Authorization =
      this.getAuthorizationHeaderFromAccessToken(authInstance.accessToken)
    this.saveAuthInstance({
      accessToken: authInstance.accessToken,
      refreshToken: authInstance.refreshToken,
      email: authInstance.email,
    })
  }

  private setResponseInterceptorForAuthenticatedUserClient(
    client: AxiosInstance,
    currentEmail: string,
  ) {
    client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status && error.response.status === 401) {
          let tokenWasRefreshed = false
          const authInstance = this.getAuthInstance()
          if (authInstance.isAuthenticated) {
            try {
              const response = await axios.post(
                `${client.defaults.baseURL}/refresh-token`,
                {
                  refresh: authInstance.refreshToken,
                },
              ) // diff axios instance without interceptor
              this.setAuthHeader(client, {
                accessToken: response.data.tokens.access,
                refreshToken: response.data.tokens.refresh,
                email: currentEmail,
              })
              tokenWasRefreshed = true
            } catch (error) {
              return Promise.reject(error)
            }

            if (tokenWasRefreshed) {
              return client({
                url: error.config.url,
                method: error.config.method,
                data: JSON.parse(error.config.data),
              })
            }
          }
        }
        return Promise.reject(error)
      },
    )
  }

  configureAuthClient(client: AxiosInstance, authInstance: AuthStructureType) {
    this.setAuthHeader(client, authInstance)
    this.setResponseInterceptorForAuthenticatedUserClient(
      client,
      authInstance.email,
    )
  }

  private saveAuthInstance(authInstance: AuthStructureType) {
    const authInstanceForSave: SavedAuthStructureType = {
      ...authInstance,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem(
      this.tokensSaveKey,
      JSON.stringify(authInstanceForSave),
    )
  }

  killAuthInstance() {
    localStorage.removeItem(this.tokensSaveKey)
  }

  getAuthInstance(): ResponseAuthStructureType {
    const savedInstance: null | string = localStorage.getItem(
      this.tokensSaveKey,
    )
    const authInstance: null | SavedAuthStructureType =
      savedInstance && JSON.parse(savedInstance)

    if (
      !authInstance ||
      !authInstance.email ||
      this.tokenWasExpired(authInstance.savedAt)
    ) {
      this.killAuthInstance()
      return {
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
        email: '',
      }
    } else {
      return {
        isAuthenticated: true,
        email: authInstance.email,
        accessToken: authInstance.accessToken,
        refreshToken: authInstance.refreshToken,
      }
    }
  }

  private tokenWasExpired(savedAtIsoDate: string) {
    const savedAuthInstanceDate = new Date(savedAtIsoDate)
    return (
      differenceInSeconds(new Date(), savedAuthInstanceDate) >=
      this.refreshTokenTimeoutInSeconds - 10
    )
  }
}

export const authController = new AuthController(
  settingsRefreshTokenTimeoutInSeconds,
  applicationName,
)
