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
        token: action.payload.token,
        email: action.payload.email,
      }
    case AuthActions.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      }
  }
}
