import { Div } from "./styles";
import Logo from '../../../../../../assets/global/favicon.svg';
import Bell from '../../../../../../assets/account/bell.svg';
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
                    <Div.link active={isActiveLink('/alertas')}>
                        <Link to='/alertas'>ALERTAS</Link>
                        <div className="border-lk"></div>
                    </Div.link>
                    <Div.link active={isActiveLink('/renda')}>
                        <Link to='/renda'>RENDA</Link>
                        <div className="border-lk"></div>
                    </Div.link>
                    <Div.link active={isActiveLink('/contas')}>
                        <Link to='/contas'>CONTAS</Link>
                        <div className="border-lk"></div>
                    </Div.link>
                    <Div.link active={isActiveLink('/perfil')}>
                        <Link to='/perfil'>PERFIL</Link>
                        <div className="border-lk"></div>
                    </Div.link>
                    <div className="headerMobile">
                        <img src={Bell} alt="logo" />
                        <div className="red-circle-notification"></div>
                    </div>
                </Div.nav>
            </Div.header>
        </Div.container>
    )
}