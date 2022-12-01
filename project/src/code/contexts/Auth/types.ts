import { AuthType } from './reducer/types'

export interface AuthContextType {
  auth: AuthType
  actions: {
    login: (email: string, accessToken: string, refreshToken: string) => void
    logout: () => void
  }
}
