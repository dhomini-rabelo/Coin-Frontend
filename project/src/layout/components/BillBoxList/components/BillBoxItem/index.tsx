import { Clock } from 'phosphor-react'
import { BillController } from '../../../../../code/controllers/Bill'
import { BillModel } from '../../../../../code/models/bill'
import { priceFormatter } from '../../../../../code/utils/formatters'
import { Div, H2, Span } from '../../styles'

export function BillBoxItem({ bill }: { bill: BillModel }) {
  const billController = new BillController(bill)
  return (
    <Div.box>
      <Div.title>
        <H2.title>{bill.title}</H2.title>
        <Span.value isIncome={billController.isIncome}>
          {!billController.isScheduled ? (
            priceFormatter.format(bill.value)
          ) : (
            <Clock size={20} />
          )}
        </Span.value>
      </Div.title>
      <Span.description>{bill.description}</Span.description>
    </Div.box>
  )
}
