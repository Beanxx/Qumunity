import React, { useEffect, useState } from "react"
import axios from "axios"
import Tag from "../../atoms/Tag/Tag"
import * as S from "./RelatedTags.styles"

interface tagType {
  _id: string
  tagName: string
  tagCount: number
}

const RelatedTags = () => {
  const [tagList, setTagList] = useState<tagType[]>([])

  const getTagData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/main/tags`
      )
      setTagList(data)
    } catch (err) {
      // 임시에러처리
      // eslint-disable-next-line no-alert
      alert(err)
    }
  }

  useEffect(() => {
    getTagData()
  }, [])

  console.log(tagList)

  return (
    <S.Container>
      <h3>Related Tags</h3>
      {tagList.map((el) => (
        <li key={el._id}>
          <Tag>{el.tagName}</Tag>
          <S.Num> x {el.tagCount}</S.Num>
        </li>
      ))}
    </S.Container>
  )
}

export default RelatedTags
