import React from "react"
import * as S from "./PostItem.styles"
import Tag from "../../atoms/Tag/Tag"
import SmallProfile from "../../atoms/SmallProfile"
import postType from "../../../types/post.interface"

const PostItem: React.FC<{ postData: postType }> = ({ postData }) => {
  return (
    <S.Container>
      <S.State>
        <li>1 votes</li>
        <li>2 answers</li>
        <li>121 views</li>
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
            <li>
              <Tag>태그1</Tag>
            </li>
            <li>
              <Tag>태그1</Tag>
            </li>
            <li>
              <Tag>태그1</Tag>
            </li>
          </S.Tags>
          <SmallProfile
            profileImg={postData.profileImg}
            userName={postData.userName}
            createdDate={postData.createdDate}
          />
        </S.ContentBot>
      </S.Content>
    </S.Container>
  )
}

export default PostItem
