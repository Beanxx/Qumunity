import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    background-color: var(--main-bgc);
    border: 1px solid #30363d;
    color: var(--text-color);
    border-radius: 5px;
    padding: 8px 9px;
    margin: 5px 0;

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
    color: var(--text-color);
  }

  button {
    float: right;
    font-size: 12px;
    color: var(--btn-hover-color);
    border: none;
    background: none;

    &:hover {
      color: #58a6ff;
    }
  }
`
