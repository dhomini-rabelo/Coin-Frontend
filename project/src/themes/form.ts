import styled from 'styled-components';

export const Div = {
  container: styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    max-width: 400px;
    margin: 0 auto;

    img {
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
    }

    .logoContainer {
      margin-top: 3rem;
    }

  `,

  form: styled.div`
    margin-top: 2rem;
    padding: 0 10%;

    button {
      background: #5ED5A8;
      border-radius: 0.8rem;
      width: 100%;
      font-size: 18px;
      height: 5.4rem;
      margin-top: 3.2rem;
      border: none;
    }
    
  `,

  fieldGroup: styled.div`
    margin-top: 2.4rem;


    label {
      color: #A7AFB7;
      font-size: 14px;
      display: block;
    }
    
    input {
      height: 5.4rem;
      display: block;
      width: 100%;
      border: none;
      margin-top: 1.2rem;
      background-color: #fAfAfA;
      font-size: 14px;
      color: #1B232A;
      text-indent: 1rem;
      outline: none;
      border-radius: 0.4rem;
    }
    
    input::placeholder {
      color: #777777;
    }

  `,

  forgot: styled.div`
    display: flex;

    a {
      color: #5ED5A8;
      font-size: 12px;
      margin-top: 1rem;
    }
  `,

  btnBottom: styled.div`
    margin-top: 5.2rem;
    margin-bottom: 10vh;
    text-align: center;

    a {
      font-size: 14px;
      color: #fafafa;
    }
  `,

};
