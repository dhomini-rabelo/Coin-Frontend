import { Funnel } from 'phosphor-react';
import { BillBoxList } from '../../components/BillBoxList';
import { SimpleButton } from '../../components/Buttons/simple';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div, H1} from './styles';


export function BillPage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Div.funel>
            <Funnel size={32} color='#fafafa' />
            <SimpleButton>Adicionar</SimpleButton>
          </Div.funel>
        </Div.title>
        <BillBoxList />
      </Div.container>

    </AccountPagesModel>
  );
}
