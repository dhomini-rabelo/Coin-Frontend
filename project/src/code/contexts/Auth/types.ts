import { AuthType } from './reducer/types'

export interface AuthContextType {
  auth: AuthType
  actions: {
    login: (email: string, token: string) => void
    logout: () => void
  }
}
