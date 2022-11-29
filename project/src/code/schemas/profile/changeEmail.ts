import * as zod from 'zod'
import { ErrorMessages } from '../support/messages'

export interface ChangeEmailSchemaType {
  new_email: string
  confirm_new_email: string
}

export const ChangeEmailSchema = zod
  .object({
    new_email: zod
      .string()
      .min(1, ErrorMessages.REQUIRED)
      .email(ErrorMessages.INVALID_EMAIL),
    confirm_new_email: zod.string().min(1, ErrorMessages.REQUIRED),
  })
  .refine((data) => data.new_email === data.confirm_new_email, {
    message: 'Os emails são diferentes',
    path: ['confirm_new_email'], // field with error
  })
