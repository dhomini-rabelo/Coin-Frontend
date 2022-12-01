/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}
/* eslint-enable */

export const AuthConsumer = {
  login(email: string) {
    return {
      type: AuthActions.LOGIN,
      payload: {
        email,
      },
    }
  },
  logout() {
    return {
      type: AuthActions.LOGOUT,
    }
  },
}
