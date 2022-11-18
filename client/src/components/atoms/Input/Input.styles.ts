import styled from "styled-components"

const Container = styled.input`
  width: ${(props) => props.width || "100%"};
  padding: 7px;
  border: 1px solid #babfc4;
  border-radius: 3px;

  &:focus {
    border: none;
    outline: 1px solid #59a4de;
  }
`

export default Container
