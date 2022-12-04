import React from "react"
import Container from "./styles"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const SmallProfile: React.FC<Props> = ({
  profileImg,
  userName,
  createdDate,
}) => {
  return (
    <Container>
      <img src={profileImg} alt="profileImg" />
      <a href="temporary">{userName}</a>
      <time dateTime={createdDate}>{`asked ${createdDate}`}</time>
    </Container>
  )
}

export default SmallProfile
