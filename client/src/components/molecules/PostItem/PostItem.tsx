import React from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { format } from "timeago.js"
import * as S from "./PostItem.styles"
import Tag from "../../atoms/Tag/Tag"
import AuthorInfo from "../../atoms/AuthorInfo/AuthorInfo"
import { postType } from "../../../types/post.interface"

const PostItem: React.FC<{ postData: postType }> = ({ postData }) => {
  const createdAt = format(postData.createdAt, "en_US")

  const viewsHandler = async () => {
    await axios.get(
      `${process.env.REACT_APP_API_URL}/api/detail/views/${postData.postNum}`
    )
  }

  return (
    <S.Container>
      <S.State>
        <li>{postData.votes} votes</li>
        <li>{postData.answers} answers</li>
        <li>{postData.views} views</li>
      </S.State>
      <S.Content>
        <Link to={`/detail/${postData.postNum}`} onClick={viewsHandler}>
          <h1>{postData.title}</h1>
        </Link>
        <p>{postData.summary}</p>
        <S.ContentBot>
          <S.Tags>
            {postData.tags.map((el) => (
              <li key={el}>
                <Tag>{el}</Tag>
              </li>
            ))}
          </S.Tags>
          <AuthorInfo
            profileImg={postData.author.photoURL}
            userName={postData.author.displayName}
            createdDate={createdAt}
          />
        </S.ContentBot>
      </S.Content>
    </S.Container>
  )
}

export default PostItem
