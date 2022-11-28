import { Div } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Div.container>
      <Div.header>
        <img src="/core/logo.svg" alt="logo" />
        <Div.nav>
          <NavLink to="/renda">
            <Div.link>
              <span>RENDA</span>
              <div className="border-lk"></div>
            </Div.link>
          </NavLink>
          <NavLink to="/contas">
            <Div.link>
              <span>CONTAS</span>
              <div className="border-lk"></div>
            </Div.link>
          </NavLink>
          <NavLink to="/alertas">
            <Div.link>
              <span>ALERTAS</span>
              <div className="border-lk"></div>
            </Div.link>
          </NavLink>
          <NavLink to="/perfil">
            <Div.link>
              <span>PERFIL</span>
              <div className="border-lk"></div>
            </Div.link>
          </NavLink>
          <div className="headerMobile">
            <img src="/main_template/bell.svg" alt="logo" />
            <div className="red-circle-notification"></div>
          </div>
        </Div.nav>
      </Div.header>
    </Div.container>
  )
}
