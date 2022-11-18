import React from "react"
import MainContent from "../../components/templates/MainContent/MainContent"
import WatchedTags from "../../components/molecules/WatchedTags/WatchedTags"
import RelatedTags from "../../components/molecules/RelatedTags/RelatedTags"
import Container from "./Main.styles"

const Main: React.FC = () => {
  return (
    <Container>
      <MainContent
        profileImg={`${process.env.PUBLIC_URL}/logo192.png`}
        userName="userName"
        createdDate="2022-11-10"
      />
      <div>
        <WatchedTags />
        <RelatedTags />
      </div>
    </Container>
  )
}

export default Main
