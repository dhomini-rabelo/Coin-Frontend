import { notificationTimeChoicesType } from '../../../models/support/choices'

/* eslint-disable */
export enum AuthActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_NOTIFICATION_TIME = 'SET_NOTIFICATION_TIME',
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
  setNotificationTime(notificationTime: notificationTimeChoicesType) {
    return {
      type: AuthActions.SET_NOTIFICATION_TIME,
      payload: {
        notificationTime,
      },
    }
  },
}
