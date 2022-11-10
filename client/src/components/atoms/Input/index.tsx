import React from "react"
import Container from "./styles"

export type Props = {
  id: string
  placeholder: string
  name: string
  inputHandler: (text: React.SetStateAction<string>) => void
}

const Input: React.FC<Props> = ({ id, placeholder, name, inputHandler }) => {
  const changeHandler = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    inputHandler(event.target.value)
  }

  return (
    <Container
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={changeHandler}
    />
  )
}

export default Input
