import { Div } from './styles'
import { Money, Wallet, UserCircle } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <Div.container>
      <Div.footer>
        <NavLink to="/renda">
          <Div.icon>
            <Money size={24} />
            <span>Renda</span>
          </Div.icon>
        </NavLink>
        <NavLink to="/contas">
          <Div.icon>
            <Wallet size={24} />
            <span>Contas</span>
          </Div.icon>
        </NavLink>
        <NavLink to="/perfil">
          <Div.icon>
            <UserCircle size={24} />
            <span>Perfil</span>
          </Div.icon>
        </NavLink>
      </Div.footer>
    </Div.container>
  )
}
