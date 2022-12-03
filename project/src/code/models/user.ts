import { notificationTimeChoices } from './support/choices'

export interface UserModel {
  email: string
  notificationTime: keyof typeof notificationTimeChoices
}
