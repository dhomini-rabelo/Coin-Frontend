import { ArrowUp } from 'phosphor-react';
import { PercentBox } from '../../components/PercentBox';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div} from './styles';


export function IncomePage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <PercentBox title="RENDA" value={100.75} percent={15} />
        <PercentBox title="GANHO" value={200.00} percent={-15} />
        <PercentBox title="GASTOS" value={99} percent={20.9} />
      </Div.container>
    </AccountPagesModel>
  );
}
