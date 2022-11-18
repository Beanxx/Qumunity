import React from "react"
import Container from "./Input.styles"

export type Props = {
  id: string
  name: string
  placeholder?: string
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input: React.FC<Props> = ({ id, name, placeholder, onKeyUp }) => {
  return (
    <Container
      id={id}
      placeholder={placeholder}
      name={name}
      onKeyUp={onKeyUp}
    />
  )
}

export default Input
