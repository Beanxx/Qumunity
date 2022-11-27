import React from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import * as S from "./DetailItem.styles"
import Tag from "../../atoms/Tag/Tag"
import SmallProfile from "../../atoms/SmallProfile"
import postType from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"
import { ReactComponent as ArrowTop } from "../../../assets/icons/arrowTop.svg"
import { ReactComponent as ArrowBot } from "../../../assets/icons/arrowBot.svg"
import { ReactComponent as BookMark } from "../../../assets/icons/bookMark.svg"

export type Props = {
  detailData: postType | answerType
  detailType: "question" | "answer"
}

const DetailItem: React.FC<Props> = ({ detailData, detailType }) => {
  const navigate = useNavigate()
  const api = detailType === "question" ? "detail" : "answer"

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

  return (
    <S.Container detailType={detailType}>
      <S.Side>
        <ArrowTop />
        <span>{detailData?.votes}</span>
        <ArrowBot />
        <BookMark />
      </S.Side>
      <S.Content>
        {detailData && "summary" in detailData ? (
          <p>{detailData?.summary}</p>
        ) : null}
        <p>{detailData?.content}</p>
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
          <a href="/">Edit</a>
          <button type="button" onClick={() => deleteHandler(api)}>
            Delete
          </button>
          <a href="/">Delete</a>
          <SmallProfile
            profileImg={`${process.env.PUBLIC_URL}/logo192.png`}
            userName={detailData?.author.displayName}
            createdDate={detailData?.createdDate}
          />
        </S.Edit>
      </S.Content>
    </S.Container>
  )
}

export default DetailItem
