import React from "react"
import { postType } from "../../../types/post.interface"
import MyQuestionItem from "../../molecules/MyQuestionItem/MyQuestionItem"

interface Props {
  myQuestionData: postType[]
}

const MyQuestionList: React.FC<Props> = ({ myQuestionData }) => {
  return (
    <ul>
      {myQuestionData.map((el) => (
        <MyQuestionItem key={el._id} data={el} />
      ))}
    </ul>
  )
}

export default MyQuestionList
