import { BillBoxItem } from './components/BillBoxItem'
import { Div } from './styles'

export function BillBoxList() {
  return (
    <Div.container>
      <BillBoxItem
        title={'teste'}
        description={'apenas um teste'}
        value={0}
        isIncome={false}
      />
      <BillBoxItem
        title={'teste'}
        description={
          'de csdnjs ds dd adsaads sdasdad dsasadsddsaasddssad dasadsdsaa adssadsaddsa'
        }
        value={20}
        isIncome={true}
      />
    </Div.container>
  )
}
