import {Div} from './styles';
import { AccountPagesModel } from '../../themes/pages/account/index'
import { SimpleBox } from '../../components/SimpleBox';
import { Envelope, LockSimple } from 'phosphor-react';


export function AccountPage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <SimpleBox icon={<Envelope size={40} color="#fff" />} title='Alterar email' description='Altere o endereço de email da sua conta' />
        <SimpleBox icon={<LockSimple size={40} color="#fff" />} title='Alterar senha' description='Altere a senha da sua conta' />
      </Div.container>
    </AccountPagesModel>
  );
}