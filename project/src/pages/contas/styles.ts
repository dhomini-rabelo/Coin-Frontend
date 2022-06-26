import styled from 'styled-components';

export const Div = {
  container: styled.div`
    padding-inline: 4.5%;
  `,

  title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  funel: styled.div`
    display: flex;
    align-items: center;

    button {
      font-size: 10px;
      line-height: 22px;
      letter-spacing: 0.0264em;
      font-style: normal;
      font-weight: 700;
      margin-left: 2rem;
      color: #1B232A;
    }

    @media(max-width: 768px) {
      button {
        display: none;
      }
    }
  `,

  a: styled.div``,
};


export const H1 = {

  title: styled.h1`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.0264em;
    font-style: normal;
    font-weight: 700;
    color: #fafafa;
  `,

}