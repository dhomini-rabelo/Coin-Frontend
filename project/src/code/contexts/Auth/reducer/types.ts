import { UserModel } from '../../../models/user'
import { AuthActions } from './actions'

export type AuthReducerAction = {
  type: AuthActions
  payload?: any
}

export interface AuthType extends UserModel {
  isAuthenticated: boolean
}
