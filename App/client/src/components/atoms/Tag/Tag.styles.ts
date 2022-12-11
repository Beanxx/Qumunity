import styled from "styled-components"

const Container = styled.span`
  font-size: 13px;
  color: var(--title-color);
  background-color: rgba(56, 139, 253, 0.15);
  padding: 7px 10px;
  border-radius: 2em;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: #1f6feb;
    color: white;
  }
`

export default Container
