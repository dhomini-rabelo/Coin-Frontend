import * as zod from 'zod'
import { DynamicErrors, ErrorMessages } from './support/messages'

export interface RegisterUserSchemaType {
  email: string
  password: string
  confirm_password: string
}

export const RegisterUserSchema = zod
  .object({
    email: zod
      .string()
      .email(ErrorMessages.INVALID_EMAIL)
      .min(1, ErrorMessages.REQUIRED)
      .max(150, DynamicErrors.maxLength(150)),
    password: zod.string().min(8, DynamicErrors.minLength(8)),
    confirm_password: zod.string().min(1, ErrorMessages.REQUIRED),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas são diferentes',
    path: ['confirm_password'], // field with error
  })
