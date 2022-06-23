import { ArrowUp } from 'phosphor-react';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div} from './styles';


export function IncomePage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <Div.box>
          <Div.title><span>RENDA</span></Div.title>
          <Div.data>
            <span>R$ 250,27</span>
            <Div.percent>
              <ArrowUp size={16} color='#32D74B' /><span>10%</span>
            </Div.percent>
          </Div.data>
        </Div.box>
        <Div.box>
          <Div.title><span>RENDA</span></Div.title>
          <Div.data>
            <span>R$ 250,27</span>
            <Div.percent>
              <ArrowUp size={16} color='#32D74B' /><span>10%</span>
            </Div.percent>
          </Div.data>
        </Div.box>
        <Div.box>
          <Div.title><span>RENDA</span></Div.title>
          <Div.data>
            <span>R$ 250,27</span>
            <Div.percent>
              <ArrowUp size={16} color='#32D74B' /><span>10%</span>
            </Div.percent>
          </Div.data>
        </Div.box>
      </Div.container>
    </AccountPagesModel>
  );
}
