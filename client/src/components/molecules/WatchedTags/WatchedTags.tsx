import React from "react"
import Button from "../../atoms/Button"
import * as S from "./WatchedTags.styles"
import { ReactComponent as Watch } from "../../../assets/icons/watch.svg"

const WatchedTags = () => {
  return (
    <S.Container>
      <S.Title>Watch Tags</S.Title>
      <S.Content>
        <Watch />
        <div>Watch tags to curate your list of questions.</div>
        <Button btnType="highlighted">Watch a tag</Button>
      </S.Content>
    </S.Container>
  )
}

export default WatchedTags
