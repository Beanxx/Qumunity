import styled from "styled-components"

const Container = styled.textarea`
  border: 1px solid #babfc4;
  border-radius: 3px;
  width: 100%;
  height: 200px;
  resize: none;
  padding: 10px;

  &:focus {
    outline: 1px solid #59a4de;
  }
`

export default Container
