import React from "react"
import answerType from "../../../types/answer.interface"
import MyAnswerItem from "../../molecules/MyAnswerItem/MyAnswerItem"

interface Props {
  myAnswerData: answerType[]
}

const MyAnswerList: React.FC<Props> = ({ myAnswerData }) => {
  return (
    <ul>
      {myAnswerData.map((el) => (
        <MyAnswerItem key={el._id} data={el} />
      ))}
    </ul>
  )
}

export default MyAnswerList
