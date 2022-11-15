import React from "react"
import Container from "./styles"

export type Props = {
  id: string
  name: string
  placeholder?: string
  ref: React.RefObject<HTMLInputElement>
  onKeyUp: () => void
  // inputHandler: (text: React.SetStateAction<string>) => void
}

const Input: React.FC<Props> = ({ id, placeholder, name, ref, onKeyUp }) => {
  // const changeHandler = (event: {
  //   target: { value: React.SetStateAction<string> }
  // }) => {
  //   inputHandler(event.target.value)
  // }

  return (
    <Container
      id={id}
      placeholder={placeholder}
      name={name}
      ref={ref}
      onKeyUp={onKeyUp}
      // onChange={changeHandler}
    />
  )
}

export default Input
