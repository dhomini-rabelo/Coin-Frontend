import { useContext, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'

export function AuthenticatedRoutes() {
  const navigateTo = useNavigate()
  const {
    auth: { isAuthenticated },
  } = useContext(AuthContext)

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo('/')
    }
  }, [isAuthenticated, navigateTo])

  return isAuthenticated ? <Outlet /> : <></>
}
