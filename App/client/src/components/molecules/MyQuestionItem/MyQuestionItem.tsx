import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import { postType } from "../../../types/post.interface"
import * as S from "./styles"
import Tag from "../../atoms/Tag/Tag"

interface Props {
  data: postType
}

const MyQuestionItem: React.FC<Props> = ({ data }) => {
  const date = moment(data.createdAt).format("YYYY MM/DD, HH:mm")

  return (
    <S.Container>
      <Link to={`/detail/${data.postNum}`}>
        <S.TopBox>
          <div>{data.votes} votes</div>
          <div>{data.answers} answers</div>
          <div>{data.views} views</div>
        </S.TopBox>
        <S.TitleBox>{data.title}</S.TitleBox>
        <S.BottomBox>
          <S.Tags>
            {data.tags.map((el) => (
              <li key={el}>
                <Tag>{el}</Tag>
              </li>
            ))}
          </S.Tags>
          <div>{date}</div>
        </S.BottomBox>
      </Link>
    </S.Container>
  )
}

export default MyQuestionItem
