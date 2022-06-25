import {Div} from './styles';
import { ArrowUp } from 'phosphor-react';


export function PercentBox({title, value, percent}: {title: string, value: number, percent: number}) {
    let green = '#32D74B'
    let redColor = '#FF375F'
    let boxColor = '#FE9710'
    return (
        <Div.box color={boxColor}>
            <Div.title><span>{title}</span></Div.title>
        <Div.data>
          <span>R$ {value.toFixed(2).replace('.', ',')}</span>
          <Div.percent color={boxColor}>
            <ArrowUp size={16} color={boxColor} /><span>{percent.toFixed(0)}%</span>
          </Div.percent>
        </Div.data>
      </Div.box>
    )
}