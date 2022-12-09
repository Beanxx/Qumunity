import React from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import * as S from "./styles"
import answerType from "../../../types/answer.interface"

interface Props {
  data: answerType
}

const MyQuestionItem: React.FC<Props> = ({ data }) => {
  const date = moment(data.createdAt).format("YYYY MM/DD, HH:mm")

  return (
    <S.Container>
      <Link to={`/detail/${data.postId.postNum}`}>
        <S.TopBox>
          <div>{data.votes} votes</div>
        </S.TopBox>
        <S.TitleBox>{data.postId.title}</S.TitleBox>
        <S.BottomBox>
          <div>{data.postId.tags.map((el) => el)}</div>
          <div>{date}</div>
        </S.BottomBox>
      </Link>
    </S.Container>
  )
}

export default MyQuestionItem
