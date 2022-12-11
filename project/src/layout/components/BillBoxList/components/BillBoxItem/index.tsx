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
        <Span.value
          isIncome={billController.isIncome}
          className="flex items-center justify-center"
        >
          {!billController.isScheduled ? (
            priceFormatter.format(billController.value)
          ) : (
            <>
              <span>{priceFormatter.format(billController.value)}</span>
              <Clock size={20} className="inline ml-1" />
            </>
          )}
        </Span.value>
      </Div.title>
      <Span.description>{bill.description || '...'}</Span.description>
    </Div.box>
  )
}
