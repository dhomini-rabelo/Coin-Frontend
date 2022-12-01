export interface AuthStructureType {
  accessToken: string
  refreshToken: string
  email: string
}

export interface SavedAuthStructureType extends AuthStructureType {
  savedAt: string
}

export interface ResponseAuthStructureType extends AuthStructureType {
  isAuthenticated: boolean
}
