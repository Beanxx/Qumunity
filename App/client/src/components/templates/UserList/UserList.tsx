import React from "react"
import UserItem from "../../organisms/UserItem/UserItem"
import { authorType } from "../../../types/post.interface"
import Container from "./styles"

interface Props {
  usersData: authorType[]
}

const UserList: React.FC<Props> = ({ usersData }) => {
  return (
    <Container>
      {usersData.map((el) => (
        <UserItem key={el._id} user={el} />
      ))}
    </Container>
  )
}

export default UserList
