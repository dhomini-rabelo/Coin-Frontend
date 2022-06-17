import {Div} from './styles';
import Logo from '../../../assets/global/favicon.svg';

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
        <Div.forgot><span>Esqueceu a senha ?</span></Div.forgot>
        <button>Login</button>
      </Div.form>
    </Div.container>
  );
}
