import styled from "styled-components"

export const Container = styled.footer`
  width: 100%;
  background-color: var(--side-bgc);
  padding: 1rem 0;
  position: relative;
  z-index: 2;
`

export const Content = styled.div`
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: var(--footer-color);
  font-size: 14px;
`

export const Top = styled.div`
  display: flex;

  .logo_box {
    height: 60px;
    flex: 1;

    a {
      color: var(--footer-color);
    }
  }

  .link_box {
    padding-top: 5px;
    display: flex;
    flex: 5;
    gap: 2rem;

    a {
      color: var(--footer-color);

      &:hover {
        color: var(--text-color);
      }
    }
  }
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  .copyright_box {
    display: flex;
    color: var(--footer-color);

    span {
      color: var(--footer-color);
    }

    @media ${(props) => props.theme.mobile} {
      span {
        display: none;
      }
    }
  }

  .github_box {
    a {
      display: flex;
      gap: 5px;

      span {
        font-size: 15px;
        margin-top: 5px;
        color: var(--footer-color);
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`
