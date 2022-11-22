import React, { forwardRef } from "react"
import Input from "../../atoms/Input/Input"
import TextArea from "../../atoms/TextArea/TextArea"
import TagsInput from "../../molecules/TagsInput/TagsInput"
import Container from "./AskForm.styles"

export type Props = {
  id: string
  title: string
  children: React.ReactNode
  type: "default" | "textarea" | "tagsInput"
}

const AskForm = forwardRef<HTMLInputElement, Props>(
  ({ id, title, children, type }, ref) => {
    return (
      <Container>
        <label htmlFor={id}>
          {title}
          <p>{children}</p>
        </label>
        {type === "default" && <Input id={id} name={id} ref={ref} />}
        {type === "textarea" && <TextArea id={id} name={id} />}
        {type === "tagsInput" && <TagsInput id={id} name={id} />}
      </Container>
    )
  }
)

export default AskForm
