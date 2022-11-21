import React from "react"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import Info from "./MainContent.styles"
import postType from "../../../types/post.interface"

const MainContent: React.FC = () => {
  const postData: postType[] = [
    {
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
  ]

  return (
    <div>
      <MiniHeader>Questions</MiniHeader>
      <Info>
        <div>{postData.length} questions</div>
        <FilterButtons />
      </Info>
      <PostList postData={postData} />
    </div>
  )
}

export default MainContent
