import React, { useState } from "react"
import Container from "./FilterButtons.styles"

const FilterButtons: React.FC<{ setSort: (sort: string) => void }> = ({
  setSort,
}) => {
  const [activity, setActivity] = useState(0)
  const btnList = [
    { title: "Newest", value: "newest" },
    { title: "Votes", value: "votes" },
    { title: "Views", value: "views" },
    { title: "Answered", value: "answered" },
    { title: "Unanswered", value: "unanswered" },
  ]

  const btnHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    idx: number
  ) => {
    setSort(event.currentTarget.value)
    setActivity(idx)
  }

  return (
    <Container>
      {btnList.map((el, idx) => {
        return (
          <button
            type="button"
            value={el.value}
            onClick={(event) => btnHandler(event, idx)}
            className={activity === idx ? "on" : ""}
          >
            {el.title}
          </button>
        )
      })}
    </Container>
  )
}

export default FilterButtons
