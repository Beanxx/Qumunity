import React, { useState } from "react"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import * as S from "./styles"
import { ReactComponent as QuestionImg } from "../../../assets/icons/questionmark.svg"

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
    <Form style={S.styles.container}>
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

      <S.Description>
        Passwords must contain at least eight characters, including at least 1
        letter and 1 number.
      </S.Description>

      <S.CheckDescription>
        <input type="checkbox" />
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
        <div>
          <QuestionImg />
        </div>
      </S.CheckDescription>

      <Button btnType="highlighted" onClick={(e) => JoinFunc(e)}>
        Sign up
      </Button>

      <S.BottomDescription>
        By clicking “Sign up”, you agree to our
        <span> terms of service, privacy policy</span> and
        <span> cookie policy</span>
      </S.BottomDescription>
    </Form>
  )
}

export default JoinForm
