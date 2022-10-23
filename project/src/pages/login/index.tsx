import { Div } from '../../themes/styles/form';
import Logo from '../../../assets/global/favicon.svg';
import ErrorIcon from '../../../assets/form/error.svg';
import { Link } from 'react-router-dom';
import { ButtonForm } from '../../themes/styles/form/components/buttons';

export function LoginPage() {
  return (
    <Div.container>
      <div className="logoContainer"><img src={Logo} alt="logo" /></div>
      <Div.form>
        <Div.fieldGroup>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Digite seu email" />
          <Div.error><img src={ErrorIcon} alt="error-icon" /><span>Este campo é obrigatório</span></Div.error>
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" placeholder="Digite sua senha" />
          <Div.forgot>
            <Div.error><img src={ErrorIcon} alt="error-icon" /><span>Este campo é obrigatório</span></Div.error>
            <a href="#">Esqueceu a senha?</a>
          </Div.forgot>
        </Div.fieldGroup>
        <ButtonForm>Entrar</ButtonForm>
        <Div.btnBottom>
          <Link to="/cadastro">Criar uma conta</Link>
        </Div.btnBottom>
      </Div.form>
    </Div.container>
  );
}
