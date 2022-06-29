import {Div} from '../../themes/styles/form';
import Logo from '../../../assets/global/favicon.svg';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../../themes/styles/form/components/buttons';

export function RegisterPage() {
  return (
    <Div.container>
      <div className="logoContainer"><img src={Logo} alt="logo" /></div>
      <Div.form>
        <Div.fieldGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" />
          <Div.error></Div.error>
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="Digite sua senha" />
          <Div.error></Div.error>
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme sua senha" />
          <Div.error></Div.error>
        </Div.fieldGroup>
        <ButtonForm>Cadastrar</ButtonForm>
        <Div.btnBottom>
          <Link to="/login">Fazer login</Link>
        </Div.btnBottom>
      </Div.form>
    </Div.container>
  );
}
