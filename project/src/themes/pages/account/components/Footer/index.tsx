import { Div } from "./styles";
import { Money, Wallet, UserCircle } from 'phosphor-react'



export function Footer() {
    return (
      <Div.container>
        <Div.footer className="footerMobile">
          <Div.icon>
            <Money size={24} color={'#5ED5A8'} />
            <span style={{color: '#5ED5A8'}}>Renda</span>
          </Div.icon>
          <Div.icon>
            <Wallet size={24} color={'#777777'} />
            <span>Contas</span>
          </Div.icon>
          <Div.icon>
            <UserCircle size={24} color={'#777777'} />
            <span>Perfil</span>
          </Div.icon>
        </Div.footer>
      </Div.container>
    )
}