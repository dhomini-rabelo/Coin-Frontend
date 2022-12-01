import { createContext, ReactNode, useReducer } from 'react'
import { client } from '../../../core/settings'
import { AuthReducer } from './reducer'
import { AuthConsumer } from './reducer/actions'
import { AuthContextType } from './types'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    isAuthenticated: false,
    email: '',
  })

  function login(email: string, token: string) {
    authDispatch(AuthConsumer.login(email))
    client.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function logout() {
    authDispatch(AuthConsumer.logout())
  }

  return (
    <AuthContext.Provider value={{ auth, actions: { login, logout } }}>
      {children}
    </AuthContext.Provider>
  )
}
