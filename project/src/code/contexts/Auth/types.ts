import { notificationTimeChoicesType } from '../../models/support/choices'
import { AuthType } from './reducer/types'

export interface AuthContextType {
  auth: AuthType
  actions: {
    login: (
      email: string,
      notificationTime: notificationTimeChoicesType,
      accessToken: string,
      refreshToken: string,
    ) => void
    logout: () => void
  }
}
