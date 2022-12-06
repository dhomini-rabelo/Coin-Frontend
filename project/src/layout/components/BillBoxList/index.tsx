import { BillModel } from '../../../code/models/bill'
import { BillBoxItem } from './components/BillBoxItem'
import { Div } from './styles'

export function BillBoxList({ bills }: { bills: BillModel[] }) {
  return (
    <Div.container>
      {bills.map((bill) => (
        <BillBoxItem key={bill.id} bill={bill} />
      ))}
    </Div.container>
  )
}
