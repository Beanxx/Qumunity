import React, { useState } from "react"
import * as S from "./styles"
import Button from "../../atoms/ButtonExample"
import LoginInput from "../../atoms/LoginInput"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const SignInFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
  }

  return (
    <S.Container>
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
      <Button buttonType="ghost" onClick={(e) => SignInFunc(e)}>
        Log in
      </Button>
    </S.Container>
  )
}

export default LoginForm
