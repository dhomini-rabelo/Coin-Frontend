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

  getAuthorizationHeaderFromAccessToken(accessToken: string) {
    return `Bearer ${accessToken}`
  }

  saveAuthInstance(authInstance: AuthStructureType) {
    const authInstanceForSave: SavedAuthStructureType = {
      ...authInstance,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem(
      this.tokensSaveKey,
      JSON.stringify(authInstanceForSave),
    )
  }

  getAuthInstance(): ResponseAuthStructureType {
    const savedInstance: null | string = localStorage.getItem(
      this.tokensSaveKey,
    )
    const authInstance: null | SavedAuthStructureType =
      savedInstance && JSON.parse(savedInstance)
    if (!authInstance || this.tokenWasExpired(authInstance.savedAt)) {
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
