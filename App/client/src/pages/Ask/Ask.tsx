import React from "react"
import AskForms from "../../components/templates/AskForms/AskForms"
import * as S from "./Ask.styles"

const Ask = () => {
  return (
    <S.Container>
      <S.Inner>
        <h1>Ask a public question</h1>
        <S.Content>
          <AskForms />
          <S.Side>side</S.Side>
        </S.Content>
      </S.Inner>
    </S.Container>
  )
}

export default Ask
