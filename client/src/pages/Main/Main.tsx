import React from "react"
import MainContent from "../../components/templates/MainContent/MainContent"
import WatchedTags from "../../components/molecules/WatchedTags/WatchedTags"
import RelatedTags from "../../components/molecules/RelatedTags/RelatedTags"
import Container from "./Main.styles"

const Main: React.FC = () => {
  return (
    <Container>
      <MainContent />
      <div>
        <WatchedTags />
        <RelatedTags />
      </div>
    </Container>
  )
}

export default Main
