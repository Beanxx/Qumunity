import styled from "styled-components"

const Container = styled.div`
  button {
    padding: 10px;
    color: rgb(82, 89, 96);
    background-color: #f8f9f9;
    border: 1px solid #9fa6ad;
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
    background-color: #e3e6e8;
  }
`

export default Container
