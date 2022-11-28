import { Div } from './styles'
import { Money, Wallet, UserCircle } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const getColor = (path: string) =>
    document.location.pathname === path ? '#5ed5a8' : '#777777'

  return (
    <Div.container>
      <Div.footer>
        <Link to="/renda">
          <Div.icon color={getColor('/renda')}>
            <Money size={24} />
            <span>Renda</span>
          </Div.icon>
        </Link>
        <Link to="/contas">
          <Div.icon color={getColor('/contas')}>
            <Wallet size={24} />
            <span>Contas</span>
          </Div.icon>
        </Link>
        <Link to="/perfil">
          <Div.icon color={getColor('/perfil')}>
            <UserCircle size={24} />
            <span>Perfil</span>
          </Div.icon>
        </Link>
      </Div.footer>
    </Div.container>
  )
}
