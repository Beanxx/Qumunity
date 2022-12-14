import React from "react"
import Container from "./styles"
import { postLengthType } from "../../../types/post.interface"

const StatsBox: React.FC<postLengthType> = ({
  myQuestionLength,
  myAnswerLength,
}) => {
  return (
    <Container>
      <div className="inner_style">
        <div className="num_style">{myQuestionLength}</div>
        <div className="title_style">Questions</div>
      </div>
      <div className="inner_style">
        <div className="num_style">{myAnswerLength}</div>
        <div className="title_style">Answers</div>
      </div>
    </Container>
  )
}

export default StatsBox
