import styled from 'styled-components'

export const Div = {
  container: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #1b232a;

    @media (min-width: 768px) {
      display: none;
    }
  `,

  footer: styled.footer`
    height: 76px;
    margin-inline: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 400px) {
      justify-content: space-between;
      margin-inline: 1.875rem;
    }
  `,

  icon: styled.div(
    ({ color }: { color: string }) => `
    display: flex;
    color: ${color};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    
    span {
      font-size: 14px;
      margin-top: 0.625rem;
    }
  `,
  ),

  dummy: styled.div``,
}
