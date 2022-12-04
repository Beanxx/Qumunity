import React, { forwardRef } from "react"
import { Editor } from "@toast-ui/react-editor"
import EditorInput from "../../atoms/EditorInput/EditorInput"
import TagsInput from "../../molecules/TagsInput/TagsInput"
import Container from "./AskForm.styles"

export type Props = {
  id: string
  title: string
  children: React.ReactNode
  type: "default" | "textarea" | "tagsInput" | "editor"
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
}

type Refs = HTMLInputElement & HTMLTextAreaElement & Editor

const AskForm = forwardRef<Refs, Props>(
  ({ id, title, children, type, onEnterTag }, ref) => {
    return (
      <Container>
        <label htmlFor={id}>
          {title}
          <p>{children}</p>
        </label>
        {type === "default" && <input id={id} name={id} ref={ref} />}
        {type === "textarea" && <textarea id={id} name={id} ref={ref} />}
        {type === "editor" && <EditorInput ref={ref} />}
        {type === "tagsInput" && (
          <TagsInput id={id} name={id} onEnterTag={onEnterTag} />
        )}
      </Container>
    )
  }
)

export default AskForm
