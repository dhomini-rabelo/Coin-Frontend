import { Div } from "./styles";
import Logo from '../../../../../../assets/global/favicon.svg';
import { Link } from 'react-router-dom';


export function Header() {
    return (
        <Div.container>
            <Div.header>
                <img src={Logo} alt="logo" />
                <Div.nav>
                    <Link to='/conta/renda'>RENDA</Link>
                    <Link to='/conta/agenda'>CONTAS</Link>
                    <Link to='/conta'>PERFIL</Link>
                    <div className="headerMobile">
                        <span>JUN</span>
                    </div>
                </Div.nav>
            </Div.header>
        </Div.container>
    )
}