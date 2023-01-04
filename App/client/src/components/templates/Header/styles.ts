import styled from "styled-components"

export const Layout = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: var(--side-bgc);
  box-sizing: border-box;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);

  .line-style {
    width: 100%;
    height: 3px;
    background-color: var(--title-color);
  }
`

export const Container = styled.div`
  max-width: 1200px;
  height: 50px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-box {
    flex: 1;
    height: 100%;
    width: 180px;

    @media ${(props) => props.theme.mobile} {
      width: 100px;
    }
  }

  .search-box {
    display: flex;
    justify-content: center;
    flex: 3.5;

    @media ${(props) => props.theme.tablet} {
      flex: 2;
    }

    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 10px;
  }
`

export const ButtonContianer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex: 1;
`
