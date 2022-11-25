import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import * as S from "./DetailContent.styles"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import AnswerList from "../../organisms/AnswerList/AnswerList"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import Button from "../../atoms/Button"
import TextArea from "../../atoms/TextArea/TextArea"
import postType from "../../../types/post.interface"

const DetailContent: React.FC = () => {
  const [detailtData, setDetailData] = useState<postType>()
  const { id } = useParams()

  const getDetailData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/detail/${id}`
      )
      setDetailData(data)
    } catch (err) {
      // 임시에러처리
      // eslint-disable-next-line no-alert
      alert(err)
    }
  }

  useEffect(() => {
    getDetailData()
  }, [])

  return (
    <div>
      <MiniHeader>{detailtData?.title}</MiniHeader>
      <S.Info>
        <div>{`Asked ${detailtData?.createdDate} years ago`}</div>
        <div>{`Viewed ${detailtData?.views} times`}</div>
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
