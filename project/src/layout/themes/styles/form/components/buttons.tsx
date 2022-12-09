import { ReactNode } from 'react'
import { Loading } from '../../../../components/Loading'
import { Div } from '../index'

export function ButtonForm({
  children,
  active = true,
  onFetch = false,
  type = 'submit',
  onClick = () => {
    return {}
  },
}: {
  children: ReactNode
  active?: boolean
  onFetch?: boolean
  type?: 'submit' | 'button' | 'reset'
  onClick?: () => void
}) {
  return onFetch ? (
    <Div.buttonComponentStyle>
      <button type={type} disabled className="stage">
        <Loading />
      </button>
    </Div.buttonComponentStyle>
  ) : (
    <Div.buttonComponentStyle>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </Div.buttonComponentStyle>
  )
}
