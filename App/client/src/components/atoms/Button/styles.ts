import styled, { css } from "styled-components"
import { Props } from "."

interface BtnProps {
  width?: string
}

export const defaultButton = css`
  background-color: rgba(56, 139, 253, 0.15);
  color: var(--title-color);
  border: 1px solid rgba(56, 139, 253, 0.15);

  &:hover {
    background-color: #1f6feb;
    color: white;
  }
`

export const highlightedButton = css<BtnProps>`
  background: var(--btn-color);
  color: #fff;
  border: rgba(240, 246, 252, 0.1);
  width: ${(props) => props.width || "100%"};

  &:hover {
    background-color: #2ea043;
  }
`

const Container = styled.button<Props>`
  border-radius: 5px;
  padding: 8px 10px;
  cursor: pointer;

  ${(props) => {
    switch (props.btnType) {
      case "default":
        return defaultButton
      case "highlighted":
        return highlightedButton
      default:
        return defaultButton
    }
  }}
`

export default Container
