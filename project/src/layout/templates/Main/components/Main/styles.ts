import styled from 'styled-components'

export const Div = {
  container: styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 0.9375rem;
    padding-bottom: 116px;

    @media (max-width: 540px) {
      &:has([data-headlessui-state='open'])
        div:not(:has([data-headlessui-state='open']))
        > div {
        visibility: hidden;
        max-height: 0;
      }
      &:has([data-headlessui-state='open'])
        div[data-headlessui-state='open']
        div {
        visibility: visible;
        max-height: none;
      }
    }
  `,
}
