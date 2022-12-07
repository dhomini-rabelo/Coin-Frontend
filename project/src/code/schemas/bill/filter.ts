import * as zod from 'zod'
import {
  billTypeChoicesValues,
  paymentMethodChoicesValues,
} from '../../models/support/choices'

export const FilterBillSchema = zod.object({
  payment_method: zod.enum([...paymentMethodChoicesValues, 'none']),
  bill_type: zod.enum([...billTypeChoicesValues, 'none']),
})

export type FilterBillSchemaType = zod.infer<typeof FilterBillSchema>
