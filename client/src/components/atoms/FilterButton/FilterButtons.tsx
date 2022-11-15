import React from "react"
import Container from "./FilterButtons.styles"

const FilterButtons = () => {
  return (
    <Container>
      <button type="button">Newest</button>
      <button type="button">Votes</button>
      <button type="button">Views</button>
      <button type="button">Answered</button>
      <button type="button">Unanswered</button>
    </Container>
  )
}

export default FilterButtons
