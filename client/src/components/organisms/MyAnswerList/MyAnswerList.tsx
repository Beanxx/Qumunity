import React from "react"
import answerType from "../../../types/answer.interface"
import MyAnswerItem from "../../molecules/MyAnswerItem/MyAnswerItem"

interface Props {
  myAnswerData: answerType[]
  offset: number
  limit: number
}

const MyAnswerList: React.FC<Props> = ({ myAnswerData, offset, limit }) => {
  return (
    <ul>
      {myAnswerData.slice(offset, offset + limit).map((el) => (
        <MyAnswerItem key={el._id} data={el} />
      ))}
    </ul>
  )
}

export default MyAnswerList
