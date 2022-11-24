import React from "react"
import * as S from "./styles"

const StatsBox = () => {
  return (
    <S.Container>
      <div className="inner_style">
        <div className="num_style">1</div>
        <div className="title_style">Questions</div>
      </div>
      <div className="inner_style">
        <div className="num_style">1</div>
        <div className="title_style">Answers</div>
      </div>
    </S.Container>
  )
}

export default StatsBox
