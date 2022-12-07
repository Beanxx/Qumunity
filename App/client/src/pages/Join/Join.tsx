import React from "react"
import { Link } from "react-router-dom"
import JoinForm from "../../components/templates/JoinForm/JoinForm"
import * as S from "./styles"

const Join = () => {
  return (
    <S.Layout>
      <JoinForm />
      <S.BottomContainer>
        <div>Already have an account?</div>
        <Link to="/login" className="link-style">
          Login in
        </Link>
      </S.BottomContainer>
    </S.Layout>
  )
}

export default Join
