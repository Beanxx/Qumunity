import React from "react"
import Button from "../../atoms/Button"
import Container from "./MiniHeader.styles"

export type Props = {
  children: React.ReactNode
}

const MiniHeader: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
      <Button btnType="highlighted">Ask Question</Button>
    </Container>
  )
}

export default MiniHeader
