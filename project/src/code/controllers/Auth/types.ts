import { notificationTimeChoicesType } from '../../models/support/choices'

export interface AuthStructureType {
  accessToken: string
  refreshToken: string
  email: string
  notificationTime: notificationTimeChoicesType
}

export interface SavedAuthStructureType extends AuthStructureType {
  savedAt: string
}

export interface ResponseAuthStructureType extends AuthStructureType {
  isAuthenticated: boolean
}
