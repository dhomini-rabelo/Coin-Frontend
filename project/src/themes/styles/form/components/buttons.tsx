import { ReactNode } from 'react'
import { Loading } from '../../../../components/Loading'
import { Div } from '../index'

export function ButtonForm({
  children,
  active = true,
  onFetch = false,
}: {
  children: ReactNode
  active?: boolean
  onFetch?: boolean
}) {
  return onFetch ? (
    <Div.buttonComponentStyle>
      <button id="buttonComponent" type="submit" disabled className="stage">
        <Loading />
      </button>
    </Div.buttonComponentStyle>
  ) : (
    <Div.buttonComponentStyle>
      <button id="buttonComponent" type="submit">
        {children}
      </button>
    </Div.buttonComponentStyle>
  )
}
