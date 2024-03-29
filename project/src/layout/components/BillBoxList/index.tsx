import { BillModel } from '../../../code/models/bill'
import { BillBoxItem } from './components/BillBoxItem'
import { BillInfo } from './components/BillInfo'
import { Div } from './styles'

export function BillBoxList({ bills }: { bills: BillModel[] }) {
  return (
    <Div.container className="bill-list mx-auto grid grid-cols-1 gap-x-4 sm:grid-cols-2 w-full">
      {bills.length ? (
        bills.map((bill) => (
          <BillInfo key={bill.id} bill={bill}>
            <BillBoxItem bill={bill} />
          </BillInfo>
        ))
      ) : (
        <div className="mt-8 text-white text-center w-full text-sm">
          <span>Nenhuma conta</span>
        </div>
      )}
    </Div.container>
  )
}
