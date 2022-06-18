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
    padding: 0 8%;
  `,

  buttonComponentStyle: styled.div`
    button {
      background: #5ED5A8;
      border-radius: 0.8rem;
      width: 100%;
      font-size: 18px;
      height: 5.4rem;
      margin-top: 3.2rem;
      border: none;
    }

    .stage {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .dot-flashing {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #000;
      color: #000;
      animation: dotFlashing 1s infinite linear alternate;
      animation-delay: .5s;
    }

    .dot-flashing::before, .dot-flashing::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
    }

    .dot-flashing::before {
      left: -15px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #000;
      color: #000;
      animation: dotFlashing 1s infinite alternate;
      animation-delay: 0s;
    }

    .dot-flashing::after {
      left: 15px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #000;
      color: #000;
      animation: dotFlashing 1s infinite alternate;
      animation-delay: 1s;
    }
    
    @keyframes dotFlashing {
      0% {
        background-color: #000;
      }
      50%,
      100% {
        background-color: #ccc;
      }
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
