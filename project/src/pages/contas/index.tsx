import { Funnel } from 'phosphor-react';
import { BillBoxList } from '../../components/BillBoxList';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div, H1} from './styles';


export function BillPage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Funnel size={24} color='#fafafa' />
        </Div.title>
        <BillBoxList />
      </Div.container>

    </AccountPagesModel>
  );
}
