import { AuthActions } from './actions'
import { AuthReducerAction, AuthType } from './types'

export function AuthReducer(
  state: AuthType,
  action: AuthReducerAction,
): AuthType {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        isAuthenticated: true,
        notificationTime: action.payload.notificationTime,
        email: action.payload.email,
      }
    case AuthActions.LOGOUT:
      return {
        isAuthenticated: false,
        notificationTime: '8',
        email: '',
      }
    case AuthActions.SET_NOTIFICATION_TIME:
      return {
        ...state,
        notificationTime: action.payload.notificationTime,
      }
  }
}
