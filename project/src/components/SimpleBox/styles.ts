import styled from 'styled-components';

export const Div = {
  container: styled.div`
    color: #fff;
    background: #121214;
    border-radius: 4px;
    display: flex;
    width: 100%;
    min-height: 134px;
    border: 0.1px solid #444444;
    max-width: 400px;
    margin-top: 2rem;
    flex-wrap: wrap;
    
    &:hover {
      cursor: pointer;      
    }

    @media(max-width: 275px) {
      & > * {
        width: 100% !important;

        svg {
          margin-block: 1rem;
        }
      }
    }
  `,

  iconContainer: styled.div`
    width: 85.9px;
    background-color: #015F43;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  main: styled.div`
    margin-left: 2.4rem;
    margin-top: 2.4rem;
    flex: 1
  `,

arrow: styled.div`
    margin-right: 2.4rem;
    margin-left: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  
  dummy: styled.div``,
};

export const H2 = {
 title: styled.h2`
    font-size: 24px;
    line-height: 33.6px;
  `,
};

export const P = {
  description: styled.p`
    font-size: 14px;
    line-height: 22.4px;
    color: #E1E1E6;
    margin-top: 0.8rem;
  `,

};
