import { ClockCounterClockwise } from 'phosphor-react';
import { BillBoxList } from '../../components/BillBoxList';
import { PercentBox } from '../../components/PercentBox';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div, H2, Span} from './styles';
import {adaptMoney} from '../../_Core/utils/money'
import { Navigation } from '../../components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUp } from 'phosphor-react';


export function IncomePage() {
  let incomeValue = 2000
  let expenseValue = 1500
  let billValue = incomeValue - expenseValue
  let percent = 25
  let percentColor = percent >= 0 ? '#32D74B' : '#FF6B6B'
  
  
  return (
    <AccountPagesModel>
      <Navigation>
        <Link to='/' style={{color: '#C1C7CD'}}>Renda</Link>
        <Link to='/'>Dados</Link>
      </Navigation>
      <Div.container>
        <Div.incomeContainer>
          <Div.income>
            <H2.income>SALDO ATUAL</H2.income>
            <Span.value isIncome={billValue >= 0}>{adaptMoney(billValue)}</Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GANHOS</H2.income>
            <Span.value isIncome={true}>{adaptMoney(incomeValue)}</Span.value>
          </Div.income>
          <Div.income className="forPC">
            <H2.income>GASTOS</H2.income>
            <Span.value isIncome={false}>{adaptMoney(expenseValue)}</Span.value>
          </Div.income>
          <Div.arrow>
            {
              percent >= 0 ? (
                <><ArrowUp size={60} color={percentColor} /><span style={{color: percentColor}}>{percent.toFixed(0)}%</span></>
                ) : (
                  <><ArrowDown size={60} color={percentColor} /><span style={{color: percentColor}}>{(percent*-1).toFixed(0)}%</span></>
                )
            }
          </Div.arrow>
        </Div.incomeContainer>
        <Div.time>
          <H2.bill>Histórico</H2.bill>
          <ClockCounterClockwise size={24} color='#fafafa' />
        </Div.time>
        <BillBoxList />
      </Div.container>
    </AccountPagesModel>
  );
}
