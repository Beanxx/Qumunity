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
  background: #fff;
  color: #39739c;
  font-size: 15px;

  &:hover {
    background: #d0e2f0;
    cursor: pointer;
  }

  &[disabled] {
    color: #eaeaea;
    cursor: revert;
    transform: revert;
  }

  &[aria-current="page"] {
    background: #d0e2f0;
    cursor: revert;
    transform: revert;
  }
`
