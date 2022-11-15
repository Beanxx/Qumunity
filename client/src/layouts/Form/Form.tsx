import React from "react"
import Container from "./styles"

interface Props {
  children: React.ReactNode
  style?: object
}

const Form: React.FC<Props> = ({ children, style }) => {
  const classes = style

  return <Container style={classes}>{children}</Container>
}

export default Form
