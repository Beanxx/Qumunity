import React from "react"
import Container from "./styles"

export type Props = {
  children: React.ReactNode
}

const Tag: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Tag
