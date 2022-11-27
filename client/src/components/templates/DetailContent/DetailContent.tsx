import React, { FormEvent, useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import * as S from "./DetailContent.styles"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import AnswerList from "../../organisms/AnswerList/AnswerList"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import Button from "../../atoms/Button"
import TextArea from "../../atoms/TextArea/TextArea"
import { postType } from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"

const DetailContent: React.FC = () => {
  const [detailData, setDetailData] = useState<postType[]>([])
  const [answerData, setDataAnswer] = useState<answerType[]>([])
  const { id } = useParams()
  const uid = useSelector((state: RootState) => state.user.uid)
  const answerInputRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const answerInput = answerInputRef.current?.value
    const answer = { uid, content: answerInput, postId: detailData[0]._id }

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/answer/register`, answer)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getDetailData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/detail/${id}`
      )
      setDetailData([data])
    } catch (err) {
      // 임시에러처리
      // eslint-disable-next-line no-alert
      alert(err)
    }
  }

  const getAnswerData = async () => {
    const currentPostId = { postId: detailData[0]?._id }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/answer`,
        currentPostId
      )
      setDataAnswer(data.answerList)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getDetailData()
  }, [])

  useEffect(() => {
    getAnswerData()
  }, [detailData])

  return (
    <div>
      <MiniHeader>{detailData[0]?.title}</MiniHeader>
      <S.Info>
        <div>{`Asked ${detailData[0]?.createdDate} years ago`}</div>
        <div>{`Viewed ${detailData[0]?.views} times`}</div>
      </S.Info>
      <ul>
        <DetailItem detailType="question" detailData={detailData[0]} />
      </ul>
      <S.AnswerTitle>{detailData[0]?.answers} Answer</S.AnswerTitle>
      <AnswerList answerData={answerData} />
      <S.AnswerForm onSubmit={submitHandler}>
        <div>Your Answer</div>
        <TextArea id="answer" name="answer" ref={answerInputRef} />
        <Button btnType="highlighted" width="auto">
          Post Your Answer
        </Button>
      </S.AnswerForm>
    </div>
  )
}

export default DetailContent
