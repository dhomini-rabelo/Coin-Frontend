import styled from 'styled-components'

export const Div = {
  container: styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    max-width: 400px;
    margin: 0 auto;

    img[alt='logo'] {
      width: 5rem;
      height: 5rem;
      margin: 0 auto;
    }

    .logoContainer {
      margin-top: 1.875rem;
    }
  `,

  select: styled.div`
    background-color: #363636;
    padding-left: 0.3125rem;
    height: 3.25rem;
    li,
    button,
    div {
      display: block !important;
      color: #fafafa;
      font-size: 14px;
      padding-block: 1rem;
      padding-left: 0.625rem;
      margin-top: 0.625rem;
      cursor: pointer;
    }
    span {
      font-size: 14px;
    }
    svg {
      margin-right: 0.25rem !important;
    }
  `,

  form: styled.div`
    margin-top: 1.25rem;
    padding: 0 2%;

    input[type='checkbox'],
    .checkbox-label {
      cursor: pointer;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
    }
  `,

  buttonComponentStyle: styled.div`
    width: 100% !important;

    & > button {
      background: #5ed5a8;
      border-radius: 0.5rem;
      width: 100% !important;
      font-size: 18px;
      height: 3.375rem;
      margin-top: 2rem;
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
      animation-delay: 0.5s;
    }

    .dot-flashing::before,
    .dot-flashing::after {
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
    margin-top: 1rem;

    input[type='checkbox'] {
      display: inline;
      width: 1rem;
      height: 1rem;
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
        margin-left: 0.25rem;
      }
    }

    label {
      color: #a7afb7;
      font-size: 14px;
      display: block;
    }

    input,
    textarea,
    select {
      height: 3.375rem;
      display: block;
      width: 100%;
      border: none;
      margin-top: 0.25rem;
      background-color: #363636;
      font-size: 14px;
      text-indent: 0.625rem;
      outline: none;
      border-radius: 0.25rem;
      color: #fafafa;
      border-bottom: 1.8px solid transparent;
      border-top: 1.8px solid transparent;
    }

    textarea {
      padding: 0.625rem;
      height: auto;
      text-indent: 0;
    }

    select {
      -webkit-appearance: button !important;
      -moz-appearance: button !important;
      appearance: button !important;
      cursor: pointer;
    }

    option {
      text-indent: 0.8rem;
      font-size: 20px;
      line-height: 32px;
      cursor: pointer;
    }

    option:hover {
      cursor: pointer;
    }

    input:focus,
    textarea:focus {
      border-bottom: 1.8px solid #ffffff;
    }

    input:disabled {
      background-color: transparent;
    }

    input::placeholder,
    textarea::placeholder {
      color: #777777;
    }
  `,

  forgot: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #5ed5a8;
      font-size: 12px;
    }
  `,

  btnBottom: styled.div`
    margin-top: 3.25rem;
    margin-bottom: 10vh;
    text-align: center;

    a {
      font-size: 14px;
      color: #fafafa;
    }
  `,

  error: styled.div`
    display: flex;
    align-items: center;
    min-height: 19px;
    color: #ff6b6b !important;

    span {
      color: #ff6b6b !important;
      font-size: 12px;
      margin-left: 0.25rem;
    }
  `,
}
