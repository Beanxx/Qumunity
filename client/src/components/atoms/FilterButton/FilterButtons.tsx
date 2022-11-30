import React from "react"
import Container from "./FilterButtons.styles"

const FilterButtons: React.FC<{ setSort: (sort: string) => void }> = ({
  setSort,
}) => {
  const btnHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSort(event.currentTarget.value)
  }

  return (
    <Container>
      <button type="button" value="newest" onClick={btnHandler}>
        Newest
      </button>
      <button type="button" value="votes" onClick={btnHandler}>
        Votes
      </button>
      <button type="button" value="views" onClick={btnHandler}>
        Views
      </button>
      <button type="button" value="answered" onClick={btnHandler}>
        Answered
      </button>
      <button type="button" value="unanswered" onClick={btnHandler}>
        Unanswered
      </button>
    </Container>
  )
}

export default FilterButtons
