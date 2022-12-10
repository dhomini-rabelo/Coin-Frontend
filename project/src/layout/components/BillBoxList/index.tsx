import { BillModel } from '../../../code/models/bill'
import { BillBoxItem } from './components/BillBoxItem'
import { BillInfo } from './components/BillInfo'
import { Div } from './styles'

export function BillBoxList({ bills }: { bills: BillModel[] }) {
  return (
    <Div.container className="bill-list">
      {bills.map((bill) => (
        <BillInfo key={bill.id} bill={bill}>
          <BillBoxItem bill={bill} />
        </BillInfo>
      ))}
    </Div.container>
  )
}
