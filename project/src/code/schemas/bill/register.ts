import * as zod from 'zod'
import { ErrorMessages, DynamicErrors } from '../support/messages'

export const RegisterBillSchema = zod.object({
  title: zod
    .string()
    .min(1, ErrorMessages.REQUIRED)
    .max(256, DynamicErrors.maxLength(256)),
  description: zod.string(),
  bill_type: zod.enum([
    'income',
    'scheduled_income',
    'expense',
    'scheduled_expense',
  ]),
  value: zod
    .number({
      invalid_type_error: ErrorMessages.REQUIRED,
    })
    .gte(1, DynamicErrors.minValue(1)),
  payment_method: zod.enum(['card', 'money', 'pix', 'billet']),
  day: zod
    .number({
      invalid_type_error: ErrorMessages.REQUIRED,
    })
    .gte(1, DynamicErrors.minValue(1))
    .lte(28, DynamicErrors.maxValue(28))
    .nullable(),
  partials: zod
    .number({
      invalid_type_error: ErrorMessages.REQUIRED,
    })
    .gte(1, DynamicErrors.minValue(1))
    .nullable(),
})

export type RegisterBillSchemaType = zod.infer<typeof RegisterBillSchema>
