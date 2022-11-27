import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import StatsBox from "../../organisms/StatsBox/StatsBox"
import { RootState } from "../../../redux/store"
import * as S from "./styles"

const InfoContainer = () => {
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
            src="https://source.boringavatars.com/beam/130/test?square"
            alt="profile"
          />
        </div>
        <div className="name-style">{user.displayName}</div>
      </S.ProfileBox>
      <S.StatsBox>
        <div className="title_style">Stats</div>
        <StatsBox />
      </S.StatsBox>
    </S.Container>
  )
}

export default InfoContainer
