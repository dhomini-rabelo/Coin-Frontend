import { Div } from "./styles";
import Logo from '../../../../../../assets/global/favicon.svg';
import { Link } from 'react-router-dom';
import { MONTHS_NAME } from "../../../../../data/date";


export function Header() {
    let now = new Date()
    let isActiveLink = (path) => path == document.location.pathname

    return (
        <Div.container>
            <Div.header>
                <img src={Logo} alt="logo" />
                <Div.nav>
                    <Div.link active={isActiveLink('/renda')}>
                        <Link to='/renda'>RENDA</Link>
                        <div className="border"></div>
                    </Div.link>
                    <Div.link active={isActiveLink('/contas')}>
                        <Link to='/contas'>CONTAS</Link>
                        <div className="border"></div>
                    </Div.link>
                    <Div.link active={isActiveLink('/perfil')}>
                        <Link to='/perfil'>PERFIL</Link>
                        <div className="border"></div>
                    </Div.link>
                    <div className="headerMobile">
                        <span>{MONTHS_NAME[now.getMonth() - 1].slice(0, 3).toUpperCase()}</span>
                    </div>
                </Div.nav>
            </Div.header>
        </Div.container>
    )
}