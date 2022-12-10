import { Plus } from 'phosphor-react'
import { BillBoxList } from '../../layout/components/BillBoxList'
import { SimpleButton } from '../../layout/components/Buttons/simple'
import { Div, H1, Span } from './styles'
import { AddBillForm } from './components/AddBillForm'
import { BillModel } from '../../code/models/bill'
import { useQuery } from 'react-query'
import { getBills } from '../../code/api/consumers/bills'
import { FilterBillsForm } from './components/FilterBillsForm'
import { useEffect, useState } from 'react'
import {
  billTypeChoicesType,
  paymentMethodChoicesType,
} from '../../code/models/support/choices'
import { LoadingPage } from '../../layout/components/LoadingPage'

export function BillPage() {
  const [bills, setBills] = useState<BillModel[] | null>(null)
  const { data, isFetched } = useQuery<BillModel[]>('bills', getBills)
  const filtersApplied = isFetched && !!bills && bills.length !== data?.length

  useEffect(() => {
    if (isFetched) {
      setBills(data!)
    }
  }, [isFetched, data])

  function filterBills(
    billType: billTypeChoicesType | null,
    paymentMethod: paymentMethodChoicesType | null,
  ) {
    setBills(
      (data || []).filter((bill) => {
        if (billType && paymentMethod) {
          return (
            bill.bill_type === billType && bill.payment_method === paymentMethod
          )
        } else if (billType) {
          return bill.bill_type === billType
        } else if (paymentMethod) {
          return bill.payment_method === paymentMethod
        } else {
          throw new Error('Invalid filter')
        }
      }),
    )
  }

  function removeFilters() {
    setBills(data || [])
  }

  return (
    <>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Div.funel>
            <FilterBillsForm
              filterBills={filterBills}
              removeFilters={removeFilters}
              filtersApplied={filtersApplied}
            />
            <AddBillForm>
              <SimpleButton id="addBill">Adicionar</SimpleButton>
            </AddBillForm>
          </Div.funel>
        </Div.title>
        {isFetched && bills ? <BillBoxList bills={bills} /> : <LoadingPage />}
      </Div.container>

      <AddBillForm>
        <Span.addBill>
          <Plus size={28} />
        </Span.addBill>
      </AddBillForm>
    </>
  )
}
