import React, { forwardRef } from "react"
import Container from "./TextArea.styles"

export type Props = {
  id: string
  name: string
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(({ id, name }, ref) => {
  return <Container id={id} name={name} ref={ref} />
})

export default TextArea
