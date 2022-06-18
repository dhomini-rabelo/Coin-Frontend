import {Div} from '../../themes/form';
import Logo from '../../../assets/global/favicon.svg';
import {Link} from 'react-router-dom';
import { ButtonForm } from '../../themes/form/components/buttons';

export function LoginPage() {
  return (
    <Div.container>
      <div className="logoContainer"><img src={Logo} alt="logo" /></div>
      <Div.form>
        <Div.fieldGroup>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite seu email" />
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </Div.fieldGroup>
        <Div.forgot><a href="#">Esqueceu a senha?</a></Div.forgot>
        <ButtonForm>Entrar</ButtonForm>
        <Div.btnBottom>
          <Link to="/cadastro">Criar uma conta</Link>
        </Div.btnBottom>
      </Div.form>
    </Div.container>
  );
}
