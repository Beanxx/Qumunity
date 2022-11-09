import React from "react"
import * as S from "./styles"

export type Props = {
  children: React.ReactNode
}

const SmallProfile: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <img src="" alt="img" />
      {children}
    </S.Container>
  )
}

export default SmallProfile
