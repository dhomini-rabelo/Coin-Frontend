import styled from 'styled-components'

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

    & > div {
      width: auto !important;
    }

    #addBill {
      font-size: 12px;
      line-height: 22px;
      padding: 0.4rem 1.6rem;
      letter-spacing: 0.0264em;
      font-style: normal;
      font-weight: 700;
      color: #1b232a;
    }

    svg {
      cursor: pointer;
      margin-right: 2rem;
    }

    @media (max-width: 768px) {
      #addBill {
        display: none;
      }

      svg {
        margin-right: 0;
      }
    }
  `,

  a: styled.div``,
}

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

export const Span = {
  addBill: styled.span`
    position: fixed;
    right: 36px;
    bottom: 116px;
    background-color: #5ed5a8;
    border-radius: 50%;
    padding: 0.8rem;

    @media (min-width: 768px) {
      display: none;
    }
  `,
}
