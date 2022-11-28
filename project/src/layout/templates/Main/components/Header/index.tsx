import { Div } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  const isActiveLink = (path: string) => path === document.location.pathname
  console.log(document.location.pathname)

  return (
    <Div.container>
      <Div.header>
        <img src="/core/logo.svg" alt="logo" />
        <Div.nav>
          <Div.link active={isActiveLink('/alertas')}>
            <Link to="/alertas">ALERTAS</Link>
            <div className="border-lk"></div>
          </Div.link>
          <Div.link active={isActiveLink('/renda')}>
            <Link to="/renda">RENDA</Link>
            <div className="border-lk"></div>
          </Div.link>
          <Div.link active={isActiveLink('/contas')}>
            <Link to="/contas">CONTAS</Link>
            <div className="border-lk"></div>
          </Div.link>
          <Div.link active={isActiveLink('/perfil')}>
            <Link to="/perfil">PERFIL</Link>
            <div className="border-lk"></div>
          </Div.link>
          <div className="headerMobile">
            <img src="/main_template/bell.svg" alt="logo" />
            <div className="red-circle-notification"></div>
          </div>
        </Div.nav>
      </Div.header>
    </Div.container>
  )
}
