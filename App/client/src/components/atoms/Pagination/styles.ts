import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

export const Button = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  color: var(--content-color);
  background-color: var(--border-color);
  border: 1px solid var(--gray-color);
  font-size: 15px;

  &:hover {
    background-color: var(--hover-bgc);
    border-color: 1px solid var(--content-color);
    cursor: pointer;
  }

  &[disabled] {
    color: var(--gray-color);
    cursor: revert;
    transform: revert;
  }

  &[aria-current="page"] {
    color: var(--font-color);
    background: var(--hover-bgc);
    cursor: revert;
    transform: revert;
  }
`
