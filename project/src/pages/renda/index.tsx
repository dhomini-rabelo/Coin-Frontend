import { ClockCounterClockwise, ArrowDown, ArrowUp } from 'phosphor-react'
import { Div, H2, Span } from './styles'
import { Navigation } from '../../layout/components/Navigation'
import { Link } from 'react-router-dom'
import { priceFormatter } from '../../code/utils/formatters'
import { BillBoxList } from '../../layout/components/BillBoxList'
import { BillModel } from '../../code/models/bill'
import { useQuery } from 'react-query'
import { getBills } from '../../code/api/consumers/bills'

export function IncomePage() {
  const { data } = useQuery<BillModel[]>('bills', getBills)
  const incomeValue = 2000
  const expenseValue = 1500
  const billValue = incomeValue - expenseValue
  const percent = 25
  const percentColor = percent >= 0 ? '#32D74B' : '#FF6B6B'
  const latestBills = data?.sort((obj1, obj2) =>
    new Date(obj1.created_at) > new Date(obj2.created_at) ? 1 : -1,
  )
  const latest10Bills =
    (latestBills || []).length > 10 ? latestBills!.slice(0, 10) : latestBills

  return (
    <>
      <Navigation>
        <Link to="/" style={{ color: '#C1C7CD' }}>
          Renda
        </Link>
        <Link to="/">Dados</Link>
      </Navigation>
      <Div.container>
        <Div.incomeContainer>
          <Div.income>
            <H2.income>SALDO ATUAL</H2.income>
            <Span.value isIncome={billValue >= 0}>
              {priceFormatter.format(billValue)}
            </Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GANHOS</H2.income>
            <Span.value isIncome={true}>
              {priceFormatter.format(incomeValue)}
            </Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GASTOS</H2.income>
            <Span.value isIncome={false}>
              {priceFormatter.format(expenseValue)}
            </Span.value>
          </Div.income>
          <Div.arrow>
            {percent >= 0 ? (
              <>
                <ArrowUp size={60} color={percentColor} />
                <span style={{ color: percentColor }}>
                  {percent.toFixed(0)}%
                </span>
              </>
            ) : (
              <>
                <ArrowDown size={60} color={percentColor} />
                <span style={{ color: percentColor }}>
                  {(percent * -1).toFixed(0)}%
                </span>
              </>
            )}
          </Div.arrow>
        </Div.incomeContainer>
        <Div.time>
          <H2.bill>Histórico</H2.bill>
          <ClockCounterClockwise size={24} color="#fafafa" />
        </Div.time>
        <BillBoxList bills={latest10Bills || []} />
      </Div.container>
    </>
  )
}
