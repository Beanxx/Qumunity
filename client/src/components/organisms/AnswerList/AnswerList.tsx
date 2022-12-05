import React from "react"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import answerType from "../../../types/answer.interface"

const AnswerList: React.FC<{
  answerData: answerType[]
  getAnswerData: () => void
}> = ({ answerData, getAnswerData }) => {
  return (
    <ul>
      {answerData.map((el) => (
        <DetailItem
          key={el._id}
          detailType="answer"
          detailData={el}
          getAnswerData={getAnswerData}
        />
      ))}
    </ul>
  )
}

export default AnswerList
