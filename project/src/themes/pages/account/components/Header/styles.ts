import styled from 'styled-components';

export const Div = {
  container: styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding-top: 1.5rem;
  `,

  header: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #213436;
    padding-bottom: 10px;

    img {
        width: 6rem;
        height: 6rem;
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
      right: 1rem;
      top: 0.6rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: #FF6B6B;
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

  link: styled.div(({ active }: { active: boolean }) => `
    margin-left: 2rem;
  
    a {
        color: #fafafa;
        font-size: 22px;
    }

    a:hover {
      color: #5ed5a8;
    }

    .border-lk {
      background-color: ${active ? '#fafafa' : 'transparent'};
      height: 0.2rem;
      margin: 0 auto;
      margin-top: 0.4rem;
      width: 60%;
      border-radius: 0.5rem;
    }
  `),

  dummy: styled.div``,

};
