import { AuthProvider } from '../code/contexts/Auth'
import { Router } from './router'
import './global.css'

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
