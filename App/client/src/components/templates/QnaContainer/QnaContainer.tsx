import React, { useEffect, useState } from "react"
import MyQuestionList from "../../organisms/MyQuestionList/MyQuestionList"
import * as S from "./styles"
import { postType } from "../../../types/post.interface"
import answerType from "../../../types/answer.interface"
import MyAnswerList from "../../organisms/MyAnswerList/MyAnswerList"
import Pagination from "../../atoms/Pagination/Pagination"

interface Props {
  myQuestionData: postType[]
  myAnswerData: answerType[]
}

const QnaContainer: React.FC<Props> = ({ myQuestionData, myAnswerData }) => {
  const [screen, setScreen] = useState(window.outerHeight)
  const [limit, setLimit] = useState(3)

  useEffect(() => {
    setScreen(window.outerHeight)
    if (screen > 870) {
      setLimit(4)
    }
  }, [screen])

  const [pageQ, setPageQ] = useState(1) // Question 현재 페이지 번호
  const [pageA, setPageA] = useState(1) // Answer 현재 페이지 번호
  const offsetQ = (pageQ - 1) * limit // Question 페이지 당 첫 게시물 번호
  const offsetA = (pageA - 1) * limit // Answer 페이지 당 첫 게시물 번호
  const totalQuestionPage = Math.ceil(myQuestionData.length / limit) // Question 전체 페이지 개수
  const totalAnswerPage = Math.ceil(myAnswerData.length / limit) // Answer 전체 페이지 개수

  return (
    <S.Container>
      <div className="inner_box">
        <div className="title_style">Questions</div>
        <S.ListBox>
          <div className="list_box">
            <MyQuestionList
              myQuestionData={myQuestionData}
              offset={offsetQ}
              limit={limit}
            />
          </div>
          <div className="pagination_box">
            <Pagination
              total={totalQuestionPage}
              page={pageQ}
              setPage={setPageQ}
            />
          </div>
        </S.ListBox>
      </div>
      <div className="inner_box">
        <div className="title_style">Answers</div>

        <S.ListBox>
          <div className="list_box">
            <MyAnswerList
              myAnswerData={myAnswerData}
              offset={offsetA}
              limit={limit}
            />
          </div>
          <div className="pagination_box">
            <Pagination
              total={totalAnswerPage}
              page={pageA}
              setPage={setPageA}
            />
          </div>
        </S.ListBox>
      </div>
    </S.Container>
  )
}

export default QnaContainer
