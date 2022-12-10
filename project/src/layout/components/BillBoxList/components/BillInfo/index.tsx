import { SimplePopover } from '../../../Popovers/SimplePopover'
import { Div as FormDiv } from '../../../../../layout/themes/styles/form'
import { ReactNode } from 'react'
import { BillModel } from '../../../../../code/models/bill'
import { LabelInputForm } from '../../../../themes/components/forms/LabelInputForm'
import { BillController } from '../../../../../code/controllers/Bill'
import {
  billTypeChoices,
  paymentMethodChoices,
} from '../../../../../code/models/support/choices'
import { priceFormatter } from '../../../../../code/utils/formatters'

export function BillInfo({
  children,
  bill,
}: {
  children: ReactNode
  bill: BillModel
}) {
  const billController = new BillController(bill)

  return (
    <SimplePopover button={children} long={true}>
      <FormDiv.form className="grid grid-cols-2 gap-x-4">
        <div className="col-span-2 sm:col-span-1">
          <LabelInputForm label="Título" name="title" value={bill.title} />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <LabelInputForm
            label="Tipo"
            name="bill_type"
            value={billTypeChoices[bill.bill_type]}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <LabelInputForm
            label="Descrição"
            name="description"
            value={bill.description}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <LabelInputForm
            label="Meio de pagamento"
            name="payment_method"
            value={paymentMethodChoices[bill.payment_method]}
          />
        </div>
        {billController.isScheduled && (
          <div className="col-span-2 sm:col-span-1">
            <LabelInputForm
              label="Parcelas"
              name="partials"
              value={bill.partials}
            />
          </div>
        )}
        {billController.isScheduled && (
          <div className="col-span-2 sm:col-span-1">
            <LabelInputForm label="Dia" name="day" value={bill.day} />
          </div>
        )}
        <div className="col-span-2 sm:col-span-1">
          <LabelInputForm
            label="Valor"
            name="value"
            value={priceFormatter.format(billController.value)}
          />
        </div>
      </FormDiv.form>
    </SimplePopover>
  )
}
