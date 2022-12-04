import React, { useRef, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Editor } from "@toast-ui/react-editor"
import { RootState } from "../../../redux/store"
import AskForm from "../../organisms/AskForm/AskForm"
import Button from "../../atoms/Button"
import Container from "./AskForms.styles"
import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/toastui-editor-viewer.css"
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"

const AskForms = () => {
  const navigate = useNavigate()

  const [tags, setTags] = useState<string[]>([])
  const titleInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const summaryInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const contentInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const editorRef = useRef<Editor>(null)
  const uid = useSelector((state: RootState) => state.user.uid)

  const editorChangeHandler = () => {
    const editorData = editorRef.current?.getInstance().getHTML()
  }

  const submitHandler = async () => {
    const title = titleInputRef.current?.value
    const summary = summaryInputRef.current?.value
    const content = editorRef.current?.getInstance().getHTML()

    const postData = {
      uid,
      title,
      summary,
      content,
      tags,
    }

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/ask/register`,
      postData
    )
    console.log(postData)

    if (data.success) {
      navigate("/")
    } else {
      // eslint-disable-next-line no-alert
      alert(data.msg)
    }
  }

  return (
    <Container>
      <AskForm id="title" title="Title" type="default" ref={titleInputRef}>
        Be specific and imagine you’re asking a question to another person.
      </AskForm>

      <AskForm
        id="summary"
        title="What are the details of your problem?"
        type="textarea"
        ref={summaryInputRef}
      >
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </AskForm>

      <AskForm
        id="content"
        title="What did you try and what were you expecting?"
        type="textarea"
        ref={contentInputRef}
      >
        Describe what you tried, what you expected to happen, and what actually
        resulted. Minimum 20 characters.
      </AskForm>

      <AskForm id="tags" title="Tags" type="tagsInput" onEnterTag={setTags}>
        Add up to 5 tags to describe what your question is about. Start typing
        to see suggestions.
      </AskForm>

      <Button btnType="highlighted" onClick={submitHandler}>
        Post Your Question
      </Button>

      <Editor
        previewStyle="tab"
        height="200px"
        theme="dark"
        useCommandShortcut={false}
        initialEditType="markdown"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task"],
          ["table", "link"],
          ["code", "codeblock"],
        ]}
        ref={editorRef}
        onChange={editorChangeHandler}
      />
    </Container>
  )
}

export default AskForms
