import React, { FormEvent, useRef } from "react"
import AskForm from "../../organisms/AskForm/AskForm"
import Button from "../../atoms/Button"
import Container from "./AskForms.styles"

const AskForms = () => {
  // 글 작성후 제출 할 때
  // userId, title, content, tags 전송
  const titleInputRef = useRef<HTMLInputElement>(null)
  // const summaryInputRef = useRef<HTMLTextAreaElement>(null)
  // const contentInputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()

    const title = titleInputRef.current?.value

    const postData = {
      userId: "1",
      title,
      content: "내용",
      tags: [],
    }

    console.log(title)
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
      >
        Introduce the problem and expand on what you put in the title. Minimum
        20 characters.
      </AskForm>

      <AskForm
        id="content"
        title="What did you try and what were you expecting?"
        type="textarea"
      >
        Describe what you tried, what you expected to happen, and what actually
        resulted. Minimum 20 characters.
      </AskForm>

      <AskForm id="tags" title="Tags" type="tagsInput">
        Add up to 5 tags to describe what your question is about. Start typing
        to see suggestions.
      </AskForm>

      <Button btnType="highlighted">Post Your Question</Button>
    </Container>
  )
}

export default AskForms
