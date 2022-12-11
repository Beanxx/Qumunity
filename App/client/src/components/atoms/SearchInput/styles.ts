import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;

  svg {
    position: absolute;
    margin-left: 10px;
  }
`

export const Input = styled.input`
  border-radius: 7px;
  border: 1px solid #30363d;
  background-color: var(--main-bgc);
  color: var(--text-color);
  width: 100%;
  height: 32px;
  padding-left: 35px;

  &::placeholder {
    color: #838c95;
  }
`
