import React from "react"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import Info from "./MainContent.styles"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const MainContent: React.FC<Props> = ({
  profileImg,
  userName,
  createdDate,
}) => {
  return (
    <>
      <MiniHeader>Questions</MiniHeader>
      <Info>
        <div>13,123 questions</div>
        <FilterButtons />
      </Info>
      <PostList
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
    </>
  )
}

export default MainContent
