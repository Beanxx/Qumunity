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
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
}

const AskForm = forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  ({ id, title, children, type, onEnterTag }, ref) => {
    return (
      <Container>
        <label htmlFor={id}>
          {title}
          <p>{children}</p>
        </label>
        {type === "default" && <Input id={id} name={id} ref={ref} />}
        {type === "textarea" && <TextArea id={id} name={id} ref={ref} />}
        {type === "tagsInput" && (
          <TagsInput id={id} name={id} onEnterTag={onEnterTag} />
        )}
      </Container>
    )
  }
)

export default AskForm
