import React, { useState, useEffect } from "react"
import StatsBox from "../../organisms/StatsBox/StatsBox"
import * as S from "./styles"
import { postLengthType } from "../../../types/post.interface"

const InfoContainer: React.FC<postLengthType> = ({
  myQuestionLength,
  myAnswerLength,
  data,
}) => {
  return (
    <S.Container>
      <S.ProfileBox>
        <div>
          <img src={data && data.photoURL} alt="profile" />
        </div>
        <div className="name-style">{data && data.displayName}</div>
      </S.ProfileBox>
      <S.StatsBox>
        <div className="title_style">Stats</div>
        <StatsBox
          myQuestionLength={myQuestionLength}
          myAnswerLength={myAnswerLength}
        />
      </S.StatsBox>
    </S.Container>
  )
}

export default InfoContainer
