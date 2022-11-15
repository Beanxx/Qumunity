import React from "react"
import * as S from "./DetailItem.styles"
import Tag from "../../atoms/Tag/Tag"
import SmallProfile from "../../atoms/SmallProfile"
import { ReactComponent as ArrowTop } from "../../../assets/icons/arrowTop.svg"
import { ReactComponent as ArrowBot } from "../../../assets/icons/arrowBot.svg"
import { ReactComponent as BookMark } from "../../../assets/icons/bookMark.svg"

export type Props = {
  profileImg: string
  userName: string
  createdDate: string
}

const DetailItem: React.FC<Props> = ({ profileImg, userName, createdDate }) => {
  return (
    <S.Container>
      <S.Side>
        <ArrowTop />
        <span>3</span>
        <ArrowBot />
        <BookMark />
      </S.Side>
      <S.Content>
        <p>
          Officia magna dolor mollit sit elit et id. Sunt commodo commodo
          nostrud mollit anim. Enim id cillum reprehenderit consequat ut
          exercitation Lorem do irure eu amet. Eiusmod sit nostrud reprehenderit
          adipisicing labore ullamco est nostrud commodo. Occaecat irure aute
          adipisicing fugiat. Consectetur nulla nostrud velit elit sunt eu.
        </p>
        <S.Tags>
          <li>
            <Tag>redux</Tag>
          </li>
          <li>
            <Tag>css</Tag>
          </li>
        </S.Tags>
        <S.Edit>
          <a href="/">Edit</a>
          <SmallProfile
            profileImg={profileImg}
            userName={userName}
            createdDate={createdDate}
          />
        </S.Edit>
      </S.Content>
    </S.Container>
  )
}

export default DetailItem
