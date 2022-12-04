import React from "react"
import { Link } from "react-router-dom"
import { authorType } from "../../../types/post.interface"
import Container from "./styles"

interface Props {
  user: authorType
}

const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <div>
        <img src={user.photoURL} alt="profile" />
      </div>
      <div className="info_box">
        <Link to={`/user/${user.displayName}`}>
          <div className="title">{user.displayName}</div>
        </Link>
        <div>Question: 1</div>
        <div>Answer: 3</div>
      </div>
    </Container>
  )
}

export default UserItem
