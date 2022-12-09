import React from "react"
import Container from "./styles"

interface Props {
  children: React.ReactNode
  style?: object
  id?: string
  onSubmit?: () => void
}

const Form: React.FC<Props> = ({ children, style, id, onSubmit }) => {
  const classes = style

  return (
    <Container style={classes} id={id} onSubmit={onSubmit}>
      {children}
    </Container>
  )
}

export default Form
