import React from "react"
import { Link } from "react-router-dom"
import Button from "../../atoms/Button"
import Container from "./MiniHeader.styles"

export type Props = {
  children: React.ReactNode
}

const MiniHeader: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <h1>{children}</h1>
      <Link to="/ask">
        <Button btnType="highlighted" width="auto">
          Ask Question
        </Button>
      </Link>
    </Container>
  )
}

export default MiniHeader
