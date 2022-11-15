import React, { useState } from "react"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"

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
