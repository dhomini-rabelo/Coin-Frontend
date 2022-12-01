import axios from 'axios'

export const client = axios.create({
  baseURL: 'http://localhost:8000/api',
})

export const applicationName = 'COIN'

export const refreshTokenTimeoutInSeconds = 60 * 60 * 4 // 4 hours
