import React from "react"
import Container from "./styles"

export type Props = {
  children: React.ReactNode
  btnType: "default" | "highlighted"
  width?: string
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = ({
  children,
  btnType,
  onClick,
  width,
  disabled,
}) => {
  return (
    <Container
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
