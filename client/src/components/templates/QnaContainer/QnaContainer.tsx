import React from "react"
import * as S from "./styles"

const QnaContainer = () => {
  return (
    <S.Container>
      <div className="inner_box">
        <div className="title_style">Questions</div>
        <S.ListBox />
      </div>
      <div className="inner_box">
        <div className="title_style">Answers</div>
        <S.ListBox />
      </div>
    </S.Container>
  )
}

export default QnaContainer
