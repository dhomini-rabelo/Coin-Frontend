import styled from 'styled-components';

export const Div = { 
  container: styled.div`
    padding-inline: 4.5%;
  `,

  income: styled.div`
    display: flex;
    flex-direction: column;
  `,

  time: styled.div`
    margin-top: 4.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  incomeContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3.6rem;

    @media(max-width: 768px) {
      .forPC {
        display: none;
      }
    }
  `,

  arrow: styled.div`
    display: flex;
    align-items: center;
    span {
      color: #32D74B;
      font-size: 54px;
    }


    @media(min-width: 768px) {
      display: none;
    }

    @media(max-width: 400px) {
      display: none;
    }
  `,

  dummy: styled.div``,
};

export const H2 = {

  income: styled.h1`
    color: #fafafa;
    font-size: 14px;
    max-width: 70%;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    white-space: nowrap;
  `,

  bill: styled.h1`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.0264em;
    font-style: normal;
    font-weight: 700;
    color: #fafafa;
  `,

}

export const Span = {

value: styled.span(({isIncome}: {isIncome: boolean}) => `
  font-weight: 700;
  color: ${isIncome ? '#5ED5A8': '#FF6B6B'};
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  margin-top: 1rem;
`),

}