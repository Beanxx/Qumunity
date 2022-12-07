import styled from "styled-components"

const Container = styled.ul`
  border-right: 1px solid #e3e6e8;
  padding-top: 24px;
  flex: 0 0 160px;
  font-size: 13px;

  a {
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .on {
    background-color: #f1f2f3;
    border-right: 3px solid #f48225;
    font-weight: 700;
  }
`

export default Container