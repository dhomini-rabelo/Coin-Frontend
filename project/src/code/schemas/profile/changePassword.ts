import * as zod from 'zod'
import { DynamicErrors, ErrorMessages } from '../support/messages'

export interface changePasswordSchemaType {
  current_password: string
  new_password: string
  confirm_new_password: string
}

export const changePasswordSchema = zod
  .object({
    current_password: zod.string().min(1, ErrorMessages.REQUIRED),
    new_password: zod.string().min(8, DynamicErrors.minLength(8)),
    confirm_new_password: zod.string().min(1, ErrorMessages.REQUIRED),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: 'As senhas são diferentes',
    path: ['confirm_new_password'], // field with error
  })
