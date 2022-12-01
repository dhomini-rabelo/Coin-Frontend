import { createContext, ReactNode, useReducer } from 'react'
import { client } from '../../../core/settings'
import { AuthReducer } from './reducer'
import { AuthConsumer } from './reducer/actions'
import { AuthContextType } from './types'
import axios, { AxiosError } from 'axios'
import { authController } from '../../controllers/Auth'

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, authDispatch] = useReducer(AuthReducer, {
    isAuthenticated: false,
    email: '',
  })

  function login(email: string, accessToken: string, refreshToken: string) {
    authDispatch(AuthConsumer.login(email))
    client.defaults.headers.common.Authorization =
      authController.getAuthorizationHeaderFromAccessToken(accessToken)
    authController.saveAuthInstance({
      accessToken,
      refreshToken,
      email,
    })
    client.interceptors.response.use(
      (response) => {
        return response
      },
      async (error: AxiosError) => {
        if (error.response?.status && error.response.status === 401) {
          let tokenWasRefreshed = false
          const authInstance = authController.getAuthInstance()
          if (authInstance.isAuthenticated) {
            try {
              const response = await axios.post(
                `${client.defaults.baseURL}/refresh-token`,
                {
                  refresh: authInstance.refreshToken,
                },
              ) // diff axios instance without interceptor
              client.defaults.headers.common.Authorization =
                authController.getAuthorizationHeaderFromAccessToken(
                  response.data.access,
                )
              authController.saveAuthInstance({
                accessToken: response.data.access,
                refreshToken: response.data.refresh,
                email: auth.email,
              })
              tokenWasRefreshed = true
            } catch (error) {
              return Promise.reject(error)
            }

            if (tokenWasRefreshed) {
              return client({
                url: error.config.url,
                method: error.config.method,
                data: JSON.parse(error.config.data),
              })
            }
          }
        }
        return Promise.reject(error)
      },
    )
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
