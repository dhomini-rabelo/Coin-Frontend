import { ClockCounterClockwise, ArrowDown, ArrowUp } from 'phosphor-react'
import { Div, H2, Span } from './styles'
import { Navigation } from '../../layout/components/Navigation'
import { Link } from 'react-router-dom'
import { priceFormatter } from '../../code/utils/formatters'
import { BillBoxList } from '../../layout/components/BillBoxList'
import { BillModel } from '../../code/models/bill'
import { useQuery } from 'react-query'
import { getBills } from '../../code/api/consumers/bills'
import { LoadingPage } from '../../layout/components/LoadingPage'
import { BillController } from '../../code/controllers/Bill'

export function IncomePage() {
  const { data, isFetched } = useQuery<BillModel[]>('bills', getBills)
  const bills = data || []
  const billsData = bills.reduce(
    (acc, bill) => {
      const billController = new BillController(bill)
      const additionalValue = billController.isScheduled
        ? billController.value / bill.partials!
        : billController.value
      if (billController.isIncome) {
        return {
          ...acc,
          incomeValue: acc.incomeValue + additionalValue,
        }
      } else {
        return {
          ...acc,
          expenseValue: acc.expenseValue + additionalValue,
        }
      }
    },
    {
      incomeValue: 0,
      expenseValue: 0,
    },
  )
  const billsBalance = billsData.incomeValue - billsData.expenseValue
  const billsAverage = (billsData.expenseValue * 100) / billsData.incomeValue
  const percentColor = billsAverage >= 0 ? '#32D74B' : '#FF6B6B'
  const latest10Bills =
    (data || []).length > 10 ? data!.slice(0, 10) : data || []

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
            <Span.value isIncome={billsBalance >= 0}>
              {priceFormatter.format(billsBalance)}
            </Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GANHOS</H2.income>
            <Span.value isIncome={true}>
              {priceFormatter.format(billsData.incomeValue)}
            </Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GASTOS</H2.income>
            <Span.value isIncome={false}>
              {priceFormatter.format(billsData.expenseValue)}
            </Span.value>
          </Div.income>
          <Div.arrow>
            {isFetched &&
              (billsAverage >= 0 ? (
                <>
                  <ArrowUp size={60} color={percentColor} />
                  <span style={{ color: percentColor }}>
                    {billsAverage.toFixed(0)}%
                  </span>
                </>
              ) : (
                <>
                  <ArrowDown size={60} color={percentColor} />
                  <span style={{ color: percentColor }}>
                    {(billsAverage * -1).toFixed(0)}%
                  </span>
                </>
              ))}
          </Div.arrow>
        </Div.incomeContainer>
        <Div.time>
          <H2.bill>Histórico</H2.bill>
          <ClockCounterClockwise size={24} color="#fafafa" />
        </Div.time>
        {isFetched && latest10Bills ? (
          <BillBoxList bills={latest10Bills} />
        ) : (
          <LoadingPage />
        )}
      </Div.container>
    </>
  )
}
