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
  
    a, span {
        color: #fafafa;
        font-size: 22px;
        margin-left: 2rem;
    }

    a:first-child {
        margin-left: 0;
    }

    .headerMobile {
        display: none;
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

  dummy: styled.div``,

};
