import styled from 'styled-components';

export const Div = { 
  container: styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 600px) {
      flex-direction: column;
    }
  `,

  dummy: styled.div``,
};