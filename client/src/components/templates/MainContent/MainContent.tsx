import React, { useEffect, useState } from "react"
import axios from "axios"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import Info from "./MainContent.styles"
import { postType } from "../../../types/post.interface"

const MainContent: React.FC = () => {
  const [postData, setPostData] = useState<postType[]>([])

  const getPostData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/main`
      )
      setPostData(data)
    } catch (err) {
      // 임시에러처리
      // eslint-disable-next-line no-alert
      alert(err)
    }
  }

  useEffect(() => {
    getPostData()
  }, [])

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
