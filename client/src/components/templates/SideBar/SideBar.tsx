import React from "react"
import { Link } from "react-router-dom"
import Container from "./SideBar.styles"

const SideBar = () => {
  return (
    <Container>
      <li>
        <Link to="/">Question</Link>
      </li>
      <li className="on">
        <Link to="/users">Users</Link>
      </li>
    </Container>
  )
}
export default SideBar
