import { Clock } from 'phosphor-react';
import { adaptMoney } from '../../../../_Core/utils/money';
import {Div, H2, Span} from './../../styles';


export function BillBoxItem({title, description, value, isIncome}: {title: string, description: string, value: number, isIncome: boolean}) {
    return (
     <Div.box>
        <Div.title>
          <H2.title>{title}</H2.title>
          <Span.value isIncome={isIncome}>{value > 0 ? adaptMoney(value): <Clock size={20} />}</Span.value>
        </Div.title>
        <Span.description>{description}</Span.description>
      </Div.box>
    )

}