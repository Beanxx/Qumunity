import React, { FormEvent, useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import { format } from "timeago.js"
import { Editor } from "@toast-ui/react-editor"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import * as S from "./DetailContent.styles"
import MiniHeader from "../../molecules/MiniHeader/MiniHeader"
import AnswerList from "../../organisms/AnswerList/AnswerList"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import EditorInput from "../../atoms/EditorInput/EditorInput"
import Button from "../../atoms/Button"
import { postType } from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"

const DetailContent: React.FC = () => {
  const [detailData, setDetailData] = useState<postType[]>([])
  const [answerData, setDataAnswer] = useState<answerType[]>([])
  const { id } = useParams()
  const uid = useSelector((state: RootState) => state.user.uid)
  const createdAt = format(detailData[0]?.createdAt, "en_US")
  const EditorRef = useRef<Editor>(null)

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const answerInput = {
      html: EditorRef.current?.getInstance().getHTML(),
      markdown: EditorRef.current?.getInstance().getMarkdown(),
    }
    const answer = { uid, content: answerInput, postId: detailData[0]._id }

    axios
      .post(`/api/answer/register`, answer)
      .then((res) => {
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getDetailData = async () => {
    try {
      const { data } = await axios.get(`/api/detail/${id}`)
      setDetailData([data])
    } catch (err) {
      console.log(err)
    }
  }

  const getAnswerData = async () => {
    const currentPostId = { postId: detailData[0]?._id }

    try {
      const { data } = await axios.post(`/api/answer`, currentPostId)
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
    <>
      <MiniHeader>{detailData[0]?.title}</MiniHeader>
      <ul>
        <DetailItem
          detailType="question"
          detailData={detailData[0]}
          getDetailData={getDetailData}
        />
      </ul>
      <S.AnswerTitle>{detailData[0]?.answers} Answer</S.AnswerTitle>
      <AnswerList answerData={answerData} getAnswerData={getAnswerData} />
      <S.AnswerForm onSubmit={submitHandler}>
        <div>Your Answer</div>
        <EditorInput ref={EditorRef} />
        <Button btnType="highlighted" width="auto">
          Post Your Answer
        </Button>
      </S.AnswerForm>
    </>
  )
}

export default DetailContent
