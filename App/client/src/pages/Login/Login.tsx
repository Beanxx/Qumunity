import React from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router"
import firebase from "../../firebase-config"
import Toast from "../../components/atoms/Toast/Toast"
import * as S from "./styles"
import LoginForm from "../../components/templates/LoginForm/LoginForm"

const Login = () => {
  const navigate = useNavigate()

  const onGuestSubmit = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword("hello@gmail.com", "qwe123!")
      Toast.fire({
        icon: "success",
        text: "게스트모드 로그인에 성공하셨습니다.",
      }).then(() => {
        navigate("/")
      })
    } catch (error) {
      Toast.fire({
        icon: "error",
        text: "로그인에 실패하였습니다.",
      })
    }
  }

  return (
    <S.Layout>
      <LoginForm />
      <S.BottomContainer>
        <div>Without logging in?</div>
        <div>
          <button type="submit" onClick={onGuestSubmit}>
            Guest mode Login
          </button>
        </div>
      </S.BottomContainer>

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
