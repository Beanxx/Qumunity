import React from "react"
import DetailItem from "../../molecules/DetailItem/DetailItem"
import postType from "../../../types/post.interface"

const AnswerList: React.FC<{ detailData: postType }> = ({ detailData }) => {
  return (
    <ul>
      <DetailItem detailType="answer" detailData={detailData} />
    </ul>
  )
}

export default AnswerList
