import React, { forwardRef } from "react"
import { Editor } from "@toast-ui/react-editor"
import EditorInput from "../../atoms/EditorInput/EditorInput"
import EditInput from "../../atoms/EditInput/EditInput"
import TagsInput from "../../molecules/TagsInput/TagsInput"
import Container from "./AskForm.styles"

export type Props = {
  id: string
  title: string
  children: React.ReactNode
  type: "default" | "textarea" | "tagsInput" | "register" | "edit"
  onEnterTag?: React.Dispatch<React.SetStateAction<string[]>>
  value?: string | string[]
}

type Refs = HTMLInputElement & HTMLTextAreaElement & Editor

const AskForm = forwardRef<Refs, Props>(
  ({ id, title, children, type, onEnterTag, value }, ref) => {
    return (
      <Container>
        <label htmlFor={id}>
          {title}
          <p>{children}</p>
        </label>
        {type === "default" && <input id={id} ref={ref} defaultValue={value} />}
        {type === "textarea" && (
          <textarea id={id} ref={ref} defaultValue={value} />
        )}
        {type === "register" && <EditorInput ref={ref} />}
        {type === "edit" && <EditInput ref={ref} value={value} />}
        {type === "tagsInput" && (
          <TagsInput id={id} onEnterTag={onEnterTag} value={value} />
        )}
      </Container>
    )
  }
)

export default AskForm
