import React, { useState } from "react"
import { Link } from "react-router-dom"
import Container from "./SideBar.styles"

const SideBar = () => {
  const [activity, setActivity] = useState(0)
  const tab = [
    { title: "Question", to: "/" },
    { title: "Users", to: "/users" },
  ]

  const tabHandler = (idx: number) => {
    setActivity(idx)
  }

  return (
    <Container>
      {tab.map((el, idx) => {
        return (
          <li key={el.title} className={activity === idx ? "on" : ""}>
            <Link to={el.to} onClick={() => tabHandler(idx)}>
              {el.title}
            </Link>
          </li>
        )
      })}
    </Container>
  )
}
export default SideBar
