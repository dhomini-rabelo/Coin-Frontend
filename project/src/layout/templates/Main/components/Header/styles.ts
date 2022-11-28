import styled from 'styled-components'

export const Div = {
  container: styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 0.9375rem;
  `,

  header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #213436;
    padding-bottom: 10px;

    img {
      width: 3.75rem;
      height: 3.75rem;
    }
  `,

  nav: styled.nav`
    display: flex;
    justify-content: space-between;

    .headerMobile {
      display: none;
      position: relative;
    }

    .red-circle-notification {
      position: absolute;
      right: 0.625rem;
      top: 0.375rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #ff6b6b;
    }

    .headerMobile > img {
      color: #5ed5a8;
      width: 58px;
      height: 58px;
      cursor: pointer;
    }

    span {
      color: #fafafa;
      font-size: 22px;
    }

    @media (max-width: 768px) {
      a {
        display: none;
      }

      .headerMobile {
        display: block;
      }
    }
  `,

  link: styled.div`
    margin-left: 1.25rem;

    span {
      color: #fafafa;
      font-size: 22px;
    }

    span:hover {
      color: #5ed5a8;
    }

    .border-lk {
      background-color: transparent;
      height: 0.125rem;
      margin: 0 auto;
      margin-top: 0.25rem;
      width: 60%;
      border-radius: 0.3125rem;
    }

    .active > & .border-lk {
      background-color: #fafafa;
    }
  `,

  dummy: styled.div``,
}
