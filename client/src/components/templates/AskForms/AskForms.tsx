import React from "react"
import AskForm from "../../organisms/AskForm/AskForm"
import Button from "../../atoms/Button"
import Container from "./AskForms.styles"

const AskForms = () => {
  return (
    <Container>
      <AskForm id="answer" title="Title" type="default">
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
