import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    border: 1px solid #babfc4;
    border-radius: 3px;
    padding: 8px 9px;
    margin-bottom: 3px;

    ::placeholder {
      color: red;
      font-style: italic;
    }
  }
`

export const Box = styled.div`
  label {
    padding: 0 2px;
    font-size: 14px;
    font-weight: 600;
  }

  span {
    float: right;
    font-size: 12px;
    color: #0074cc;
  }
`
