import styled from 'styled-components';

export const Div = {
  container: styled.div`
    width: 100vw;
    box-sizing: border-box;
    background-color: rgba(0,0,0,0.3);
    height: 100vh;
    position: fixed;
    left: 0; 
    top: 0; 
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,

  box: styled.div`
    background-color: #1B232A;
    width: 480px;
    border-radius: 1.6rem;
    margin-top: 10vh;
  `,
    
  header: styled.div`
    display: flex;
    flex-direction: row-reverse;
  `,

}