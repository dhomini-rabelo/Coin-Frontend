import { BillModel } from '../../../code/models/bill'
import { BillBoxItem } from './components/BillBoxItem'
import { BillInfo } from './components/BillInfo'
import { Div } from './styles'

export function BillBoxList({ bills }: { bills: BillModel[] }) {
  return (
    <Div.container className="bill-list">
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
