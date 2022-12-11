import styled from "styled-components"

const Container = styled.div`
  button {
    padding: 10px;
    color: #c9d1d9;
    background-color: #21262d;
    border: 1px solid rgba(240, 246, 252, 0.1);
    margin-left: -1px;
    font-size: 12px;
    cursor: pointer;

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
  .on {
    background-color: #30363d;
  }
`

export default Container
