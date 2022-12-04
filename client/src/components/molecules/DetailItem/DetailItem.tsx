import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { format } from "timeago.js"
import { useSelector } from "react-redux"
import { Viewer } from "@toast-ui/react-editor"
import { RootState } from "../../../redux/store"
import * as S from "./DetailItem.styles"
import Tag from "../../atoms/Tag/Tag"
import SmallProfile from "../../atoms/SmallProfile"
import { postType } from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"
import { ReactComponent as ArrowTop } from "../../../assets/icons/arrowTop.svg"
import { ReactComponent as ArrowBot } from "../../../assets/icons/arrowBot.svg"
import { ReactComponent as BookMark } from "../../../assets/icons/bookMark.svg"

export type Props = {
  detailData: postType | answerType
  detailType: "question" | "answer"
  getDetailData?: () => void
}

const DetailItem: React.FC<Props> = ({
  detailData,
  detailType,
  getDetailData,
}) => {
  const navigate = useNavigate()
  const userId = useSelector((state: RootState) => state.user.uid)
  const api = detailType === "question" ? "detail" : "answer"
  const createdAt = format(detailData?.createdAt, "en_US")

  const deleteHandler = async (paramApi: string) => {
    try {
      if (window.confirm("삭제하시겠습니까?")) {
        const response = await axios.delete(
          `${process.env.REACT_APP_API_URL}/api/${paramApi}/delete`,
          {
            data: detailData,
          }
        )
        if (response.data.success === true) {
          alert("삭제완료")
          if (detailType === "question") {
            navigate("/")
          } else {
            window.location.reload()
          }
        }
      } else {
        alert("취소")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const voteHandler = async (el: string) => {
    const body = {
      userId,
      postId: detailData?._id,
    }
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/detail/votes/${el}`,
        body
      )
      if (getDetailData) {
        getDetailData()
      }
      if (!response.data.success) {
        alert(response.data.msg)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.Container detailType={detailType}>
      {detailType === "question" ? (
        <S.Side>
          <ArrowTop onClick={() => voteHandler("like")} />
          <span>{detailData?.votes}</span>
          <ArrowBot onClick={() => voteHandler("dislike")} />
          <BookMark />
        </S.Side>
      ) : null}
      <S.Content>
        {detailData && "summary" in detailData ? (
          <p>{detailData?.summary}</p>
        ) : null}
        {detailData && <Viewer initialValue={detailData?.content} />}
        {detailData && "tags" in detailData ? (
          <S.Tags>
            {detailData?.tags.map((el) => (
              <li key={el}>
                <Tag>{el}</Tag>
              </li>
            ))}
          </S.Tags>
        ) : null}
        <S.Edit>
          {userId === detailData?.author.uid && (
            <>
              <a href="/">Edit</a>
              <button type="button" onClick={() => deleteHandler(api)}>
                Delete
              </button>
              <a href="/">Delete</a>
            </>
          )}
          <SmallProfile
            profileImg={detailData?.author.photoURL}
            userName={detailData?.author.displayName}
            createdDate={createdAt}
          />
        </S.Edit>
      </S.Content>
    </S.Container>
  )
}

export default DetailItem
