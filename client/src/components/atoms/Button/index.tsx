import React from "react"
import Container from "./styles"

export type Props = {
  children: React.ReactNode
  btnType: "default" | "highlighted"
  width?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = ({ children, btnType, onClick, width }) => {
  return (
    <Container btnType={btnType} onClick={onClick} width={width}>
      {children}
    </Container>
  )
}

export default Button
