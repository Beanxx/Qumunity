import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import firebase from "../../../firebase-config"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import Toast from "../../atoms/Toast/Toast"

interface ErrorType {
  code: string
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const SignInFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (!(email && pw)) {
      return Toast.fire({
        icon: "warning",
        text: "모든 칸을 채워주세요.",
      })
    }

    try {
      await firebase.auth().signInWithEmailAndPassword(email, pw)
      Toast.fire({
        icon: "success",
        text: "로그인에 성공하셨습니다.",
      }).then(() => {
        navigate("/")
      })
    } catch (error: unknown) {
      const err = error as ErrorType
      if (err.code === "auth/user-not-found") {
        setErrorMsg("존재하지 않는 이메일입니다.")
      } else if (err.code === "auth/wrong-password") {
        setErrorMsg("비밀번호가 일치하지 않습니다.")
      } else {
        setErrorMsg("로그인에 실패하였습니다.")
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("")
    }, 4000)
  }, [errorMsg])

  return (
    <Form>
      <LoginInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      >
        Email
      </LoginInput>
      <LoginInput
        type="password"
        sub="Forgot passowrd?"
        value={pw}
        onChange={(e) => setPw(e.currentTarget.value)}
      >
        Password
      </LoginInput>
      {errorMsg !== "" && <p>{errorMsg}</p>}
      <Button btnType="highlighted" onClick={(e) => SignInFunc(e)}>
        Log in
      </Button>
    </Form>
  )
}

export default LoginForm
