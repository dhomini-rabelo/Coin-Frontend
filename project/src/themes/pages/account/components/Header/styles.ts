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

    .border {
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
