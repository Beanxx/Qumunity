import styled from "styled-components"

const Container = styled.ul`
  border-right: 1px solid var(--side-bgc);
  padding-top: 24px;
  flex: 0 0 160px;
  font-size: 13px;

  a {
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .on {
    background-color: var(--side-bgc);
    border-right: 3px solid var(--title-color);
    font-weight: 700;
  }
`

export default Container
