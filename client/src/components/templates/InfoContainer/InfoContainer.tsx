import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import StatsBox from "../../organisms/StatsBox/StatsBox"
import { RootState } from "../../../redux/store"
import * as S from "./styles"
import { postLengthType } from "../../../types/post.interface"

const InfoContainer: React.FC<postLengthType> = ({
  myQuestionLength,
  myAnswerLength,
}) => {
  const user = useSelector((state: RootState) => state.user)
  const [nickName, setNickName] = useState("")

  useEffect(() => {
    if (user.accessToken) {
      setNickName(user.displayName)
    }
  }, [user])

  return (
    <S.Container>
      <S.ProfileBox>
        <div>
          <img
            src="https://source.boringavatars.com/beam/130?square"
            alt="profile"
          />
        </div>
        <div className="name-style">{user.displayName}</div>
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
