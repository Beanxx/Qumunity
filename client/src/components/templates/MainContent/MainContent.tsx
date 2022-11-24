import React from "react"
import axios from "axios"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import Info from "./MainContent.styles"
import postType from "../../../types/post.interface"

const MainContent: React.FC = () => {
  // 테스트 코드입니다.
  // axios
  //   .post(`${process.env.REACT_APP_API_URL}/main/test`, {
  //     title: "지금추가",
  //     content: "지금추가",
  //   })
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  const postData: postType[] = [
    {
      id: "1",
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      id: "2",
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      id: "3",
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
