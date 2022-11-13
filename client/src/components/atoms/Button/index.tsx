import React from "react"
import Container from "./styles"

export type Props = {
  children: React.ReactNode
  BtnType: "default" | "highlighted"
}

const Button: React.FC<Props> = ({ children, BtnType }) => {
  return <Container BtnType={BtnType}>{children}</Container>
}

export default Button
