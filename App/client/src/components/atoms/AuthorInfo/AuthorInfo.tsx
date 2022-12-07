import React from "react"
import { Link } from "react-router-dom"
import Container from "./AuthorInfo.styles"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const AuthorInfo: React.FC<Props> = ({ profileImg, userName, createdDate }) => {
  return (
    <Container>
      <Link to={`/user/${userName}`}>
        <img src={profileImg} alt="profileImg" />
        <span>{userName}</span>
      </Link>
      <time dateTime={createdDate}>{`asked ${createdDate}`}</time>
    </Container>
  )
}

export default AuthorInfo
