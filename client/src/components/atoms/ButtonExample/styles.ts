import styled, { css } from "styled-components"

export interface ButtonLayoutProps {
  buttonType: "primary" | "ghost" | "default"
  isFull?: boolean
}

export const defaultButtonStyles = css`
  background: #e1e1e1;
  color: #4b4b4b;

  &:hover {
    background: #e7e7e7;
  }

  &:active {
    background: #d7d7d7;
  }
`

export const primaryButtonStyles = css`
  background: #33ccbd;
  color: #fff;

  &:hover {
    background: #6fd0c6;
  }

  &:active {
    background: #0b9688;
  }
`

export const ghostButtonStyles = css`
  background: transparent;
  color: #33ccbd;
  border: 1px solid #33ccbd;

  &:hover {
    background: #33ccbd;
    color: #fff;
  }

  &:active {
    background: #0b9688;
  }
`

export const ButtonLayout = styled.button<ButtonLayoutProps>`
  padding: 10px 30px;
  border: none;
  width: ${({ isFull }) => (isFull ? "100%" : "auto")};
  ${({ buttonType }) => {
    switch (buttonType) {
      case "primary":
        return primaryButtonStyles
      case "ghost":
        return ghostButtonStyles
      case "default":
        return defaultButtonStyles
      default:
        return primaryButtonStyles
    }
  }}
`
