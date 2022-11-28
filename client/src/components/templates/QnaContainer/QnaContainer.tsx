import React from "react"
import MyQuestionList from "../../organisms/MyQuestionList/MyQuestionList"
import * as S from "./styles"
import { postType } from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"
import MyAnswerList from "../../organisms/MyAnswerList/MyAnswerList"

interface Props {
  myQuestionData: postType[]
  myAnswerData: answerType[]
}

const QnaContainer: React.FC<Props> = ({ myQuestionData, myAnswerData }) => {
  return (
    <S.Container>
      <div className="inner_box">
        <div className="title_style">Questions</div>
        <S.ListBox>
          <MyQuestionList myQuestionData={myQuestionData} />
        </S.ListBox>
      </div>
      <div className="inner_box">
        <div className="title_style">Answers</div>
        <S.ListBox>
          <MyAnswerList myAnswerData={myAnswerData} />
        </S.ListBox>
      </div>
    </S.Container>
  )
}

export default QnaContainer
