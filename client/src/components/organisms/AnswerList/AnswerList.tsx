import React from "react"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import answerType from "../../../types/answer.interface"

const AnswerList: React.FC<{ answerData: answerType[] }> = ({ answerData }) => {
  return (
    <ul>
      {answerData.map((el) => (
        <DetailItem key={el._id} detailType="answer" detailData={el} />
      ))}
    </ul>
  )
}

export default AnswerList
