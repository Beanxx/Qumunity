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
      <S.TopBox>
        <div>{data.votes} votes</div>
      </S.TopBox>
      <S.TitleBox>{data.content}</S.TitleBox>
      <S.BottomBox>
        <div>{date}</div>
      </S.BottomBox>
    </S.Container>
  )
}

export default MyQuestionItem
