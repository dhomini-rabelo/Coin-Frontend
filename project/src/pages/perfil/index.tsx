import {Div} from './styles';
import { AccountPagesModel } from '../../themes/pages/account/index'
import { SimpleBox } from '../../components/SimpleBox';
import { Envelope, LockSimple, Watch } from 'phosphor-react';


export function AccountPage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <SimpleBox icon={<Envelope size={40} color="#fff" />} title='Alterar email' description='Altere o endereço de email da sua conta' />
        <SimpleBox icon={<Watch size={40} color="#fff" />} title='Alterar envio' description='Altere o horário do envio de alertas por email' />
        <SimpleBox icon={<LockSimple size={40} color="#fff" />} title='Alterar senha' description='Altere a senha da sua conta' />
      </Div.container>
    </AccountPagesModel>
  );
}