import styled from "styled-components"

const Container = styled.fieldset`
  padding: 24px;
  border: 1px solid #30363d;
  border-radius: 3px;
  background-color: var(--side-bgc);
  color: var(--text-color);

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
    width: 100%;
    height: 100px;
    resize: none;
    padding: 10px;
    background-color: var(--main-bgc);
    border: 1px solid #30363d;
    border-radius: 5px;
    color: var(--text-color);

    &:focus {
      outline: 1px solid #59a4de;
    }
  }

  input {
    width: 100%;
    padding: 7px;
    background-color: var(--main-bgc);
    border: 1px solid #30363d;
    border-radius: 5px;
    color: var(--text-color);

    &:focus {
      outline: 1px solid #59a4de;
    }
  }
`

export default Container
