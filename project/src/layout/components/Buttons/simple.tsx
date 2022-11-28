import { ReactNode } from 'react'
import styled from 'styled-components'

const Button = {
  main: styled.div`
    background: #5ed5a8;
    border-radius: 0.8rem;
    width: 100%;
    display: block;
    border: none;
  `,
}

export function SimpleButton({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) {
  return id ? (
    <Button.main id={id}>{children}</Button.main>
  ) : (
    <Button.main>{children}</Button.main>
  )
}
