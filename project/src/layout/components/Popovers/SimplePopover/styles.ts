import styled from 'styled-components'

export const Div = {
  container: styled.div`
    width: 100%;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.3);
    min-height: 100vh;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 540px) {
      background-color: #1b232a;
    }
  `,

  box: styled.div(
    ({ long }: { long: boolean }) => `
    background-color: #1B232A;
    width: 540px;
    border-radius: 1rem;
    margin-top: 2.5rem;
    padding-bottom: 1.5rem;
    padding-inline: 2%;

    .long-form {
      
      & > div  {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      & > div > div {
          width: 45%;
      }
    
      @media(max-width: 540px){
        & > div > div {
          width: 100%;
        }
      }
    }

    ${long && 'width: 64rem; max-width: 100%;'}

    @media(max-width: 540px){
      margin-top: 0;
      padding-top: 0.3125rem;
      min-height: 100vh;
    }

  `,
  ),

  header: styled.div`
    display: flex;
    flex-direction: row-reverse;
  `,
}
