/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN'
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
}
