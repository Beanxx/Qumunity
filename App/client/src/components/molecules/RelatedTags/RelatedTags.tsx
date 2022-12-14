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
      const { data } = await axios.get(`/api/main/tags`)
      setTagList(data)
    } catch (err) {
      alert(err)
    }
  }

  useEffect(() => {
    getTagData()
  }, [])

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
