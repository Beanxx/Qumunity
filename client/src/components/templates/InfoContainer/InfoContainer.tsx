import React from "react"
import StatsBox from "../../organisms/StatsBox/StatsBox"
import * as S from "./styles"

const InfoContainer = () => {
  return (
    <S.Container>
      <S.ProfileBox>
        <div>
          <img
            src="https://source.boringavatars.com/beam/130/test?square"
            alt="profile"
          />
        </div>
        <div className="name-style">NickName</div>
      </S.ProfileBox>
      <S.StatsBox>
        <div className="title_style">Stats</div>
        <StatsBox />
      </S.StatsBox>
    </S.Container>
  )
}

export default InfoContainer
