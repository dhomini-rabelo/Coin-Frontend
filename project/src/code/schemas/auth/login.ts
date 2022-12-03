import * as zod from 'zod'
import { ErrorMessages } from '../support/messages'

export interface LoginSchemaType {
  email: string
  password: string
}

export const LoginSchema = zod.object({
  email: zod.string().min(1, ErrorMessages.REQUIRED),
  password: zod.string().min(1, ErrorMessages.REQUIRED),
})
