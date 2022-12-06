import axios from 'axios'
import { QueryClient } from 'react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
})

export const client = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const applicationName = 'COIN'

export const refreshTokenTimeoutInSeconds = 60 * 60 * 4 // 4 hours
