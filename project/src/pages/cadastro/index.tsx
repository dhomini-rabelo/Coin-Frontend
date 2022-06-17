import {Div} from '../../themes/form';
import Logo from '../../../assets/global/favicon.svg';
import { Link } from 'react-router-dom';

export function RegisterPage() {
  return (
    <Div.container>
      <div className="logoContainer"><img src={Logo} alt="logo" /></div>
      <Div.form>
        <Div.fieldGroup>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite seu nome" />
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite seu email" />
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="">Confirmar senha</label>
          <input type="password" placeholder="Digite sua senha" />
        </Div.fieldGroup>
        <button>Cadastrar</button>
        <Div.btnBottom>
          <Link to="/login">Fazer login</Link>
        </Div.btnBottom>
      </Div.form>
    </Div.container>
  );
}
