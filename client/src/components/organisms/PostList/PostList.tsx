import React from "react"
import PostItem from "../../molecules/PostItem/PostItem"
import postType from "../../../types/post.interface"

const PostList: React.FC<{ postData: postType[] }> = ({ postData }) => {
  return (
    <ul>
      {postData.map((el: postType) => (
        <PostItem postData={el} />
      ))}
    </ul>
  )
}

export default PostList
