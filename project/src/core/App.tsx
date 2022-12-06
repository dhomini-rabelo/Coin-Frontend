import { AuthProvider } from '../code/contexts/Auth'
import { Router } from './router'
import './global.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './settings'

export function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthProvider>
  )
}
