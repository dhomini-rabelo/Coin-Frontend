import { applicationName, tokenTimeoutInSeconds } from '../../../core/settings'
import { AuthType } from '../../contexts/Auth/reducer/types'
import { SavedAuthStructureType, AuthStructureType } from './types'
import { differenceInSeconds } from 'date-fns'

class AuthController {
  private tokensSaveKey: string
  private accessTokenTimeoutInSeconds: number

  constructor(
    accessTokenTimeoutInSeconds: number,
    applicationName: string,
    authSaveKeyName: string = 'auth',
  ) {
    this.tokensSaveKey = `@${applicationName}-${authSaveKeyName}`
    this.accessTokenTimeoutInSeconds = accessTokenTimeoutInSeconds
  }

  getAuthorizationHeaderFromAccessToken(accessToken: string) {
    return `Bearer ${accessToken}`
  }

  getAccessTokenFromAuthorizationHeader(authorizationHeader: string) {
    return authorizationHeader.slice(7)
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

  getAuthInstance(): AuthType {
    const savedInstance: null | string = localStorage.getItem(
      this.tokensSaveKey,
    )
    const authInstance: null | SavedAuthStructureType =
      savedInstance && JSON.parse(savedInstance)
    if (!authInstance || this.tokenWasExpired(authInstance.savedAt)) {
      return {
        isAuthenticated: false,
        email: '',
      }
    } else {
      return {
        isAuthenticated: true,
        email: authInstance.email,
      }
    }
  }

  private tokenWasExpired(savedAtIsoDate: string) {
    const savedAuthInstanceDate = new Date(savedAtIsoDate)
    return (
      differenceInSeconds(new Date(), savedAuthInstanceDate) >=
      this.accessTokenTimeoutInSeconds - 10
    )
  }
}

export const authController = new AuthController(
  tokenTimeoutInSeconds,
  applicationName,
)
