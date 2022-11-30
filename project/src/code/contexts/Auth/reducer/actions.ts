/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}
/* eslint-enable */

export const AuthConsumer = {
  login(email: string, token: string) {
    return {
      type: AuthActions.LOGIN,
      payload: {
        email,
        token,
      },
    }
  },
  logout() {
    return {
      type: AuthActions.LOGOUT,
    }
  },
}
