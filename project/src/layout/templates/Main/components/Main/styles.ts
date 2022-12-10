import styled from 'styled-components'

export const Div = {
  container: styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 0.9375rem;
    padding-bottom: 116px;

    &:has([data-headlessui-state='open'])
      > div:not([data-headlessui-state='open']) {
      display: none;
    }
  `,
}
