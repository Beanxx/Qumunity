import React, { forwardRef } from "react"
import Container from "./Input.styles"

export type Props = {
  id: string
  name: string
  placeholder?: string
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  // ref?: React.RefObject<HTMLInputElement>
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ id, name, placeholder, onKeyUp }, ref) => {
    return (
      <Container
        id={id}
        placeholder={placeholder}
        name={name}
        onKeyUp={onKeyUp}
        ref={ref}
      />
    )
  }
)

// const Input: React.FC<Props> = ({ id, name, placeholder, onKeyUp, ref }) => {
//   return (
//     <Container
//       id={id}
//       placeholder={placeholder}
//       name={name}
//       onKeyUp={onKeyUp}
//       ref={ref}
//     />
//   )
// }

export default Input
