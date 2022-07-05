import styled from 'styled-components';

export const Div = {
  container: styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;

    img[alt="logo"] {
      width: 8rem;
      height: 8rem;
      margin: 0 auto;
    }

    .logoContainer {
      margin-top: 3rem;
    }

  `,

  select: styled.div`
    background-color: #363636;
    padding-left: 0.5rem;
    max-height: 5.2rem;
    li, button, div {
      display: block !important;
      color: #fafafa;
      font-size: 14px;
      padding-block: 1.6rem;
      padding-left: 1rem;
      margin-top: 1rem;
      cursor: pointer;
    }
    span {
      font-size: 14px;
    }
    svg {
      margin-right: 0.4rem;
    }
  `,

  form: styled.div`
    margin-top: 2rem;
    padding: 0 4%;
    
    input[type="checkbox"], .checkbox-label {
      cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
  `,

  buttonComponentStyle: styled.div`
    width: 100% !important;

    #buttonComponent {
      background: #5ED5A8;
      border-radius: 0.8rem;
      width: 100% !important;
      font-size: 18px;
      height: 5.4rem;
      margin-top: 3.2rem;
      border: none;
    }

    button:disabled {
      cursor: not-allowed;
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
    margin-top: 0.8rem;

    input[type="checkbox"] {
      display: inline;
      width: 1.6rem;
      height: 1.6rem;
      margin-top: 0;
    }

    span {
      color: #fafafa;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      font-size: 20px;

      span {
        margin-left: 0.4rem;
      }
    }

    label {
      color: #A7AFB7;
      font-size: 14px;
      display: block;
    }
    
    input, textarea {
      height: 5.4rem;
      display: block;
      width: 100%;
      border: none;
      margin-top: 1.2rem;
      background-color: #363636;
      font-size: 14px;
      text-indent: 1rem;
      outline: none;
      border-radius: 0.4rem;
      color: #fafafa;
    }

    textarea {
      padding: 1rem;
      height: auto;
      text-indent: 0;
    }
    
    input:focus, textarea:focus {
      border-bottom: 1.8px solid #FFFFFF;
    }

    input:disabled {
      background-color: transparent;
    }
    
    input::placeholder, textarea::placeholder {
      color: #777777;
    }

  `,

  forgot: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #5ED5A8;
      font-size: 12px;
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

  error: styled.div`
    margin-top: 0.4rem;;
    margin-left: 0.35rem;
    display: flex;
    align-items: center;
    min-height: 19px;
    color: #FF6B6B;
    
    span {
      font-size: 12px;
      margin-left: 0.4rem;
    }
  `,

};
