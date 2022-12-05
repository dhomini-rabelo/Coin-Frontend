import {
  billTypeChoicesType,
  paymentMethodChoicesType,
} from './support/choices'

export interface BillModel {
  title: string
  description: string
  bill_type: paymentMethodChoicesType
  payment_method: billTypeChoicesType
  value: number
  day: number | null
  partials: number | null
}
