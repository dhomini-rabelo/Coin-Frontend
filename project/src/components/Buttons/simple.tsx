import { useState, ReactNode } from "react"
import styled from 'styled-components';

const Button = {
    main: styled.button`
      background: #5ED5A8;
      border-radius: 0.8rem;
      width: 100%;
      display: block;
      border: none;
    `,
}


export function SimpleButton({ children }: { children: ReactNode }) {
    return (
      <Button.main>{children}</Button.main>
    )
}