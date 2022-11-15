import React, { useState } from "react"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import styles from "./styles"

const JoinForm = () => {
  const [nickname, setNickname] = useState("")
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [pwConfirm, setPwConfirm] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const JoinFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
  }

  return (
    <Form style={styles.container}>
      <LoginInput
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.currentTarget.value)}
      >
        NickName
      </LoginInput>
      <LoginInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      >
        Email
      </LoginInput>
      <LoginInput
        type="password"
        value={pw}
        onChange={(e) => setPw(e.currentTarget.value)}
      >
        Password
      </LoginInput>
      {errorMsg !== "" && <p>{errorMsg}</p>}
      <LoginInput
        type="password"
        value={pwConfirm}
        onChange={(e) => setPwConfirm(e.currentTarget.value)}
      >
        Password Confirm
      </LoginInput>
      <Button btnType="highlighted" onClick={(e) => JoinFunc(e)}>
        Sign up
      </Button>
    </Form>
  )
}

export default JoinForm
