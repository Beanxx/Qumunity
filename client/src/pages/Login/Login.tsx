import React from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"
import LoginForm from "../../components/templates/LoginForm/LoginForm"

const Login = () => {
  return (
    <S.Layout>
      <LoginForm />
      <S.BottomContainer>
        <div>Don&apos;t have an account?</div>
        <Link to="/join" className="link-style">
          Sign up
        </Link>
      </S.BottomContainer>
    </S.Layout>
  )
}

export default Login
