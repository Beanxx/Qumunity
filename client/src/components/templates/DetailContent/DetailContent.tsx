import React from "react"
import * as S from "./DetailContent.styles"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import AnswerList from "../../organisms/AnswerList/AnswerList"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import Button from "../../atoms/Button"
import TextArea from "../../atoms/TextArea/TextArea"

const DetailContent: React.FC = () => {
  return (
    <div>
      <MiniHeader>질문제목</MiniHeader>
      <S.Info>
        <div>Asked 5 years ago</div>
        <div>Viewed 454 times</div>
      </S.Info>
      <ul>
        <DetailItem
          detailType="question"
          profileImg={`${process.env.PUBLIC_URL}/logo192.png`}
          userName="userName"
          createdDate="2022-11-10"
        />
      </ul>
      <S.AnswerTitle>3 Answer</S.AnswerTitle>
      <AnswerList
        profileImg={`${process.env.PUBLIC_URL}/logo192.png`}
        userName="userName"
        createdDate="2022-11-10"
      />
      <S.AnswerForm>
        {/* <label htmlFor="answer">Your Answer</label> */}
        <div>Your Answer</div>
        <TextArea id="answer" name="answer" />
        <Button btnType="highlighted" width="auto">
          Post Your Answer
        </Button>
      </S.AnswerForm>
    </div>
  )
}

export default DetailContent
