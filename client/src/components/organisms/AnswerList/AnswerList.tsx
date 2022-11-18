import React from "react"
import DetailItem from "../../molecules/DetailItem/DetailItem"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const AnswerList: React.FC<Props> = ({ profileImg, userName, createdDate }) => {
  return (
    <ul>
      <DetailItem
        detailType="answer"
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
      <DetailItem
        detailType="answer"
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
      <DetailItem
        detailType="answer"
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
    </ul>
  )
}

export default AnswerList
