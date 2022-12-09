import React from "react"
import MainContent from "../../components/templates/MainContent/MainContent"
import WatchedTags from "../../components/molecules/WatchedTags/WatchedTags"
import RelatedTags from "../../components/molecules/RelatedTags/RelatedTags"
import * as S from "./Main.styles"

const Main: React.FC = () => {
  return (
    <S.Container>
      <MainContent />
      <S.Side>
        <WatchedTags />
        <RelatedTags />
      </S.Side>
    </S.Container>
  )
}

export default Main
