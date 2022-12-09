import React from "react"
import { postType } from "../../../types/post.interface"
import MyQuestionItem from "../../molecules/MyQuestionItem/MyQuestionItem"

interface Props {
  myQuestionData: postType[]
  offset: number
  limit: number
}

const MyQuestionList: React.FC<Props> = ({ myQuestionData, offset, limit }) => {
  return (
    <ul>
      {myQuestionData.slice(offset, offset + limit).map((el) => (
        <MyQuestionItem key={el._id} data={el} />
      ))}
    </ul>
  )
}

export default MyQuestionList
