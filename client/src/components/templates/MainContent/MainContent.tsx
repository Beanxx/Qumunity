import React, { useEffect, useState } from "react"
import axios from "axios"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import Info from "./MainContent.styles"
import { postType } from "../../../types/post.interface"

const MainContent: React.FC = () => {
  const [postData, setPostData] = useState<postType[]>([])
  const [sort, setSort] = useState<string>("newest")
  const getPostData = async () => {
    const body = {
      sort,
    }
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/main`,
        body
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
  }, [sort])

  return (
    <div>
      <MiniHeader>Questions</MiniHeader>
      <Info>
        <div>{postData.length} questions</div>
        <FilterButtons setSort={setSort} />
      </Info>
      <PostList postData={postData} />
    </div>
  )
}

export default MainContent
