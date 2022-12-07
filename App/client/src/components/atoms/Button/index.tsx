import React from "react"
import Container from "./styles"

export type Props = {
  children: React.ReactNode
  btnType: "default" | "highlighted"
  width?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = ({
  children,
  btnType,
  onClick,
  width,
  disabled,
  type,
}) => {
  return (
    <Container
      type={type}
      btnType={btnType}
      onClick={onClick}
      width={width}
      disabled={disabled}
    >
      {children}
    </Container>
  )
}

export default Button
