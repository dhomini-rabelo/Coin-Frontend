import {
  billTypeChoicesType,
  paymentMethodChoicesType,
} from './support/choices'

export interface BillModel {
  id: number
  title: string
  description: string
  bill_type: billTypeChoicesType
  payment_method: paymentMethodChoicesType
  value: number
  day: number | null
  partials: number | null
  created_at: string
}
