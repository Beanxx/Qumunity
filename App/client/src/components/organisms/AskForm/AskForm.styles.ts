import styled from "styled-components"

const Container = styled.fieldset`
  padding: 24px;
  border: 1px solid #d6d9dc;
  border-radius: 3px;
  background-color: #ffffff;

  label {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;

    > P {
      font-size: 12px;
      margin: 5px 0;
      font-weight: 400;
    }
  }

  textarea {
    border: 1px solid #babfc4;
    border-radius: 3px;
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;

    &:focus {
      outline: 1px solid #59a4de;
    }
  }

  input {
    width: 100%;
    padding: 7px;
    border: 1px solid #babfc4;
    border-radius: 3px;

    &:focus {
      outline: 1px solid #59a4de;
    }
  }
`

export default Container
