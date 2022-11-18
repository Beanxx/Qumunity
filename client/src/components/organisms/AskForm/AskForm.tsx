/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react"
import Input from "../../atoms/Input/Input"
import Container from "./AskForm.styles"

const AskForm = () => {
  return (
    <Container>
      <label htmlFor="title">
        Title
        <p>
          Be specific and imagine you’re asking a question to another person.
        </p>
      </label>
      <Input id="title" name="title" />
    </Container>
  )
}

export default AskForm
