export const notificationTimeChoices = {
  '8': '8h',
  '12': '12h',
  '16': '16h',
  '20': '20h',
} as const
export type notificationTimeChoicesType = keyof typeof notificationTimeChoices
export const notificationTimeChoicesValues = ['8', '12', '16', '20'] as const // for zod

export const billTypeChoices = {
  card: 'Cartão',
  money: 'Dinheiro',
  pix: 'PIX',
  billet: 'Boleto',
} as const
export type billTypeChoicesType = keyof typeof billTypeChoices
export const billTypeChoicesValues = ['card', 'money', 'pix', 'billet'] as const // for zod

export const paymentMethodChoices = {
  income: 'Ganho',
  scheduled_income: 'Ganho',
  expense: 'Despesa',
  scheduled_expense: 'Despesa agendada',
} as const
export type paymentMethodChoicesType = keyof typeof paymentMethodChoices
export const paymentMethodChoicesValues = [
  'income',
  'scheduled_income',
  'expense',
  'scheduled_expense',
] as const // for zod
