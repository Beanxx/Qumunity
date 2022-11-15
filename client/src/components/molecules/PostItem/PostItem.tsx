import React from "react"
import * as S from "./PostItem.styles"
import Tag from "../../atoms/Tag"
import SmallProfile from "../../atoms/SmallProfile"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const PostItem: React.FC<Props> = ({ profileImg, userName, createdDate }) => {
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
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi
          temporibus! Consequuntur, repellendus obcaecati fuga labore commodi
          reprehenderit molestiae quo?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
          modi unde dolor recusandae accusamus rem distinctio? Nesciunt in
          eaque, distinctio possimus maxime cumque earum placeat. Impedit quis
          ullam eaque quibusdam minima alias adipisci, culpa nihil eius sed,
          aperiam aut ex ad illum labore inventore officiis suscipit fuga
          provident nisi perspiciatis laudantium. Tempore nostrum inventore
          explicabo quod ipsam commodi vero ducimus quidem fuga dolorum
          laudantium culpa consequatur, reiciendis facere expedita ratione, vel
          saepe ab fugiat. Magni modi iste tempora fugiat. Quia hic, omnis autem
          deleniti unde, ipsum ducimus illum laboriosam quidem, ab tempore!
          Ipsum architecto porro et eius ratione nihil commodi?
        </p>
        <S.ContentBot>
          <S.Tags>
            <Tag>태그1</Tag>
            <Tag>태그1</Tag>
            <Tag>태그1</Tag>
          </S.Tags>
          <SmallProfile
            profileImg={profileImg}
            userName={userName}
            createdDate={createdDate}
          />
        </S.ContentBot>
      </S.Content>
    </S.Container>
  )
}

export default PostItem
