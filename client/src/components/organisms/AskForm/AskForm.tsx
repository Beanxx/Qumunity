/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import Input from "../../atoms/Input/Input"
import TextArea from "../../atoms/TextArea/TextArea"
import Container from "./AskForm.styles"

export type Props = {
  id: string
  title: string
  children: React.ReactNode
  type: "default" | "textarea"
}

const AskForm: React.FC<Props> = ({ id, title, children, type }) => {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
        <p>{children}</p>
      </label>
      {type === "default" ? (
        <Input id={id} name={id} />
      ) : (
        <TextArea id={id} name={id} />
      )}
    </Container>
  )
}

export default AskForm
