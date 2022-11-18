import React from "react"
import * as S from "./DetailContent.styles"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import AnswerList from "../../organisms/AnswerList/AnswerList"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import Button from "../../atoms/Button"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const DetailContent: React.FC<Props> = ({
  profileImg,
  userName,
  createdDate,
}) => {
  return (
    <>
      <MiniHeader>질문제목</MiniHeader>
      <S.Info>
        <div>Asked 5 years ago</div>
        <div>Viewed 454 times</div>
      </S.Info>
      <ul>
        <DetailItem
          detailType="question"
          profileImg={profileImg}
          userName={userName}
          createdDate={createdDate}
        />
      </ul>
      <S.AnswerTitle>3 Answer</S.AnswerTitle>
      <AnswerList
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
      <S.AnswerForm>
        <label htmlFor="test">
          Your Answer
          <textarea id="test" name="test" />
        </label>
        <Button btnType="highlighted" width="auto">
          Post Your Answer
        </Button>
      </S.AnswerForm>
    </>
  )
}

export default DetailContent
