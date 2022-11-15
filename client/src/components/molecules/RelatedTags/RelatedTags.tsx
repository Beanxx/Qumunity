import React from "react"
import Tag from "../../atoms/Tag/Tag"
import * as S from "./RelatedTags.styles"

const RelatedTags = () => {
  return (
    <S.Container>
      <h3>Related Tags</h3>
      <li>
        <Tag>javascript</Tag>
        <S.Num> x 241552</S.Num>
      </li>
      <li>
        <Tag>typescript</Tag>
        <S.Num> x 241552</S.Num>
      </li>
      <li>
        <Tag>React</Tag>
        <S.Num> x 241552</S.Num>
      </li>
    </S.Container>
  )
}

export default RelatedTags
