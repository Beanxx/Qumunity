import styled, { css } from "styled-components"
import { Props } from "."

interface BtnProps {
  width?: string
}

export const defaultButton = css`
  background: hsl(205, 46%, 92%);
  color: hsl(205, 47%, 42%);
  border: 1px solid #9fa6ad;

  &:hover {
    background-color: #b3d3ea;
  }
`

export const highlightedButton = css<BtnProps>`
  background: #0a96ff;
  color: #fff;
  border: 1px solid hsl(205, 41%, 63%);
  width: ${(props) => props.width || "100%"};

  &:hover {
    background-color: #0074cc;
  }
`

const Container = styled.button<Props>`
  border-radius: 3px;
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
