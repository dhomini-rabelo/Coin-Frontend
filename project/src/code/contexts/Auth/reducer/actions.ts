import { notificationTimeChoicesType } from '../../../models/support/choices'

/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}
/* eslint-enable */

export const AuthConsumer = {
  login(email: string, notificationTime: notificationTimeChoicesType) {
    return {
      type: AuthActions.LOGIN,
      payload: {
        email,
        notificationTime,
      },
    }
  },
  logout() {
    return {
      type: AuthActions.LOGOUT,
    }
  },
}
