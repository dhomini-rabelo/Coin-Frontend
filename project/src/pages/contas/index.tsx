import { Plus } from 'phosphor-react'
import { BillBoxList } from '../../layout/components/BillBoxList'
import { SimpleButton } from '../../layout/components/Buttons/simple'
import { Div, H1, Span } from './styles'
import { AddBillForm } from './components/AddBillForm'
import { BillModel } from '../../code/models/bill'
import { useQuery } from 'react-query'
import { getBills } from '../../code/api/consumers/bills'
import { FilterBillsForm } from './components/FilterBillsForm'
// import { billTypeChoicesType } from '../../code/models/support/choices'

export function BillPage() {
  const { data } = useQuery<BillModel[]>('bills', getBills)
  // function filterBillList(bills: BillModel[], afterDate: string | null, paymentMethod: billTypeChoicesType | null) {
  //   return bills.filter(bill => {
  //     if (afterDate && paymentMethod) {
  //       return (new Date(afterDate) < new Date(bill.created_at)) && (bill.payment_method === paymentMethod)
  //     } else if (afterDate) {
  //       return new Date(afterDate) < new Date(bill.created_at)
  //     } else if (paymentMethod) {
  //       return bill.payment_method === paymentMethod
  //     } else {
  //       throw new Error('Invalid filter')
  //     }
  //   })
  // }

  return (
    <>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Div.funel>
            <FilterBillsForm />
            <AddBillForm>
              <SimpleButton id="addBill">Adicionar</SimpleButton>
            </AddBillForm>
          </Div.funel>
        </Div.title>
        <BillBoxList bills={data || []} />
      </Div.container>

      <AddBillForm>
        <Span.addBill>
          <Plus size={28} />
        </Span.addBill>
      </AddBillForm>
    </>
  )
}
