import { createContext, ReactNode, useReducer } from 'react'
import { client } from '../../../core/settings'
import { AuthReducer } from './reducer'
import { AuthConsumer } from './reducer/actions'
import { AuthContextType } from './types'
import { authController } from '../../controllers/Auth'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, authDispatch] = useReducer(
    AuthReducer,
    {
      isAuthenticated: false,
      email: '',
    },
    () => {
      const authInstance = authController.getAuthInstance()
      authController.configureAuthClient(client, authInstance)
      console.log(authInstance)
      return {
        isAuthenticated: authInstance.isAuthenticated,
        email: authInstance.email,
      }
    },
  )

  function login(email: string, accessToken: string, refreshToken: string) {
    authDispatch(AuthConsumer.login(email))
    authController.configureAuthClient(client, {
      email,
      accessToken,
      refreshToken,
    })
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
