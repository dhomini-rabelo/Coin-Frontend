import styled from 'styled-components';

export const Div = {
    box: styled.div(({ color }: { color: string }) => `
    border: 3.2px solid ${color};
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding-block: 2px 10px;
    padding-inline: 8%;
    width: min(100%, 320px);
    border-radius: 8px;
    align-items: center;
    flex: 1;
    margin: 0 auto;
    margin-top: 2rem;
    
    @media(min-width: 500px) {
      flex-direction: column;
      flex: 0;
      justify-content: center;
    }
    
    @media(max-width: 380px) {
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
  `),

  title: styled.div`
    font-size: 44px;
    margin-right: 2rem;

    @media(min-width: 500px) {
      font-size: 64px;
    }
  `,

  data: styled.div`
    padding-top: 0.8rem;
    font-size: 36px;
    display: flex;
    align-items: flex-start;

    & > span {
      white-space: nowrap;
    }

    @media(min-width: 500px) {
      font-size: 48px;
    }
  `,

  percent: styled.div(({ color }: { color: string }) => `
      color: ${color};
      font-size: 22px;
      display: flex;
      align-items: flex-start;
      padding-top: 0.4rem;
      margin-left: 0.4rem;

      svg {
        display: inline-block;
      }

      @media(min-width: 500px) {
       font-size: 30px;
        svg {
          width: 24px !important;
          height: 24px !important;
        }
      }
  `),
};