import React from "react"
import Button from "../../atoms/Button"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import * as S from "./MainContent.styles"

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
      <S.HeaderTop>
        <h1>Questions</h1>
        <Button BtnType="highlighted">Ask Question</Button>
      </S.HeaderTop>
      <S.HeaderBot>
        <div>13,123 questions</div>
        <FilterButtons />
      </S.HeaderBot>
      <PostList
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
    </>
  )
}

export default MainContent
