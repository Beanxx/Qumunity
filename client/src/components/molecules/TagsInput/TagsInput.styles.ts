import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border: 1px solid #babfc4;

  &:focus-within {
    outline: 1px solid #59a4de;
  }
`

export const Tags = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 3px;
`
