import {Div} from './styles';
import { ArrowDown, ArrowUp } from 'phosphor-react';


export function PercentBox({title, value, percent}: {title: string, value: number, percent: number}) {
    function getBoxColor(percent: number) {
      if(percent>10) { return '#32D74B' } else if (percent<-10) { return '#FF375F' } else { return '#FE9710' }
    }
    let boxColor = getBoxColor(percent)
    return (
        <Div.box color={boxColor}>
            <Div.title><span>{title}</span></Div.title>
        <Div.data>
          <span>R$ {value.toFixed(2).replace('.', ',')}</span>
          <Div.percent color={boxColor}>
            {
              percent >= 0 ? (
                <><ArrowUp size={16} color={boxColor} /><span>{percent.toFixed(0)}%</span></>
              ) : (
                <><ArrowDown size={16} color={boxColor} /><span>{(percent*-1).toFixed(0)}%</span></>
              )
            }
          </Div.percent>
        </Div.data>
      </Div.box>
    )
}