import styled from 'styled-components';

export const Div = {
  container: styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 600px) {
      flex-direction: column;
    }
  `,

  box: styled.div`
    border: 3.2px solid #32D74B;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 2px 8% 10px 8%;
    border-radius: 8px;
    align-items: center;
    max-width: 400px;
    flex: 1;
    margin: 0 auto;
    margin-top: 2rem;
    
    @media(min-width: 500px) {
      flex-direction: column;
      max-width: 320px;
      flex: 0;
    }

    @media(max-width: 400px) {
      flex-direction: column;
    }
  `,
  
  title: styled.div`
    font-size: 44px;

    @media(min-width: 500px) {
      font-size: 64px;
    }
  `,
  
  data: styled.div`
    padding-top: 0.8rem;
    font-size: 36px;
    display: flex;
    align-items: top;

    @media(min-width: 500px) {
      font-size: 48px;
    }

  `,
  
  percent: styled.div`
      color: #32D74B;
      font-size: 22px;
      display: flex;
      align-items: top;
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
  `,

  dummy: styled.div``,
};
