import React from "react"
import Container from "./TextArea.styles"

export type Props = {
  id: string
  name: string
}

const TextArea: React.FC<Props> = ({ id, name }) => {
  return <Container id={id} name={name} />
}

export default TextArea
