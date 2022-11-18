import React from "react"
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

const AskForm: React.FC<Props> = ({ id, title, children, type }) => {
  return (
    <Container>
      <label htmlFor={id}>
        {title}
        <p>{children}</p>
      </label>
      {type === "default" && <Input id={id} name={id} />}
      {type === "textarea" && <TextArea id={id} name={id} />}
      {type === "tagsInput" && <TagsInput />}
    </Container>
  )
}

export default AskForm
