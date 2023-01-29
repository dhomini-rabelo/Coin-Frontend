import styled from 'styled-components'

export const Div = {
  container: styled.div`
    align-items: center;
  `,

  box: styled.div`
    margin-top: 3.2rem;
    cursor: pointer;

    &:first-child {
      margin-top: 2.6rem;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `,

  title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.0264em;
  `,

  a: styled.div``,
}

export const H2 = {
  title: styled.h1`
    color: #c1c7cd;
    font-size: 14px;
    max-width: 70%;
    overflow-x: hidden;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
}

export const Span = {
  value: styled.span(
    ({ isIncome }: { isIncome: boolean }) => `
    max-width: 30%;
    font-weight: 700;
    color: ${isIncome ? '#5ED5A8' : '#FF6B6B'};
    font-size: 14px;
  `,
  ),

  description: styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.0264em;
    color: #777777;
    max-width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  `,
}
