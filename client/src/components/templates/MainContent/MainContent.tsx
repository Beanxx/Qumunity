import React, { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import FilterButtons from "../../atoms/FilterButton/FilterButtons"
import PostList from "../../organisms/PostList/PostList"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import * as S from "./MainContent.styles"
import { postType } from "../../../types/post.interface"

const MainContent: React.FC = () => {
  const [postData, setPostData] = useState<postType[]>([])
  const [sort, setSort] = useState<string>("newest")
  const { search } = useSelector((state: RootState) => state.search)

  const getPostData = async () => {
    const body = {
      sort,
      search,
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
  }, [sort, search])

  return (
    <S.Container>
      <MiniHeader>Questions</MiniHeader>
      <S.Info>
        <div>{postData.length} questions</div>
        <FilterButtons setSort={setSort} />
      </S.Info>
      <PostList postData={postData} />
    </S.Container>
  )
}

export default MainContent
