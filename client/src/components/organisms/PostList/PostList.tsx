import React from "react"
import PostItem from "../../molecules/PostItem/PostItem"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const PostList: React.FC<Props> = ({ profileImg, userName, createdDate }) => {
  return (
    <ul>
      <PostItem
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
      <PostItem
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
      <PostItem
        profileImg={profileImg}
        userName={userName}
        createdDate={createdDate}
      />
    </ul>
  )
}

export default PostList
