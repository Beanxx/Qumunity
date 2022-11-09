import React from "react"
import * as S from "./styles"

// export type Props = {}

const PostList: React.FC = () => {
  return (
    <S.Container>
      <S.State>
        <div>
          <span>1</span>
          <span> votes</span>
        </div>
        <div className="font_color">
          <span>2</span>
          <span> answers</span>
        </div>
        <div className="font_color">
          <span>121</span>
          <span> views</span>
        </div>
      </S.State>
      <S.Content>
        <h3>제목</h3>
        <p>컨텐츠</p>
        <div className="content-info">
          <S.Tags className="content-info-tags">태그1, 태그2, 태그3</S.Tags>
          <S.UserInfo>
            <a href="/">
              <img src="#" alt=" " />
            </a>
            <a href="/">user-name</a>
            <time>39 sec ago</time>
          </S.UserInfo>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default PostList
