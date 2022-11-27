import { AuthProvider } from './code/contexts/Auth'
import { Router } from './router'

export function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}
