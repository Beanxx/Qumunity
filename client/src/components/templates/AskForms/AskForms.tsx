import React, { FormEvent, useRef, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import AskForm from "../../organisms/AskForm/AskForm"
import Button from "../../atoms/Button"
import Container from "./AskForms.styles"

const AskForms = () => {
  const [tags, setTags] = useState<string[]>([])
  const titleInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const summaryInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const contentInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)
  const uid = useSelector((state: RootState) => state.user.uid)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const title = titleInputRef.current?.value
    const summary = summaryInputRef.current?.value
    const content = contentInputRef.current?.value

    const postData = {
      uid,
      title,
      summary,
      content,
      tags,
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/ask/register`, postData)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    console.log(postData)
  }

  return (
    <Container onSubmit={submitHandler}>
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

      <Button btnType="highlighted">Post Your Question</Button>
    </Container>
  )
}

export default AskForms
