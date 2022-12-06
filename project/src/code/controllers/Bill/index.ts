import { BillModel } from '../../models/bill'

export class BillController {
  private bill: BillModel
  readonly isIncome: boolean
  readonly isScheduled: boolean

  constructor(bill: BillModel) {
    this.bill = bill
    this.isIncome = ['income', 'scheduled_income'].includes(bill.bill_type)
    this.isScheduled = ['scheduled_expense', 'scheduled_income'].includes(
      bill.bill_type,
    )
  }
}
