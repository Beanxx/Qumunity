import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border: 1px solid #30363d;
  border-radius: 3px;
  background-color: var(--main-bgc);

  input {
    padding: 10px;
  }
`

export const Tags = styled.ul`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 0 5px;

  span {
    margin-left: 3px;
  }
`
