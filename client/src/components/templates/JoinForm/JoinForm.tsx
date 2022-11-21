import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import * as S from "./styles"
import Toast from "../../atoms/Toast/Toast"
import { ReactComponent as QuestionImg } from "../../../assets/icons/questionmark.svg"
import firebase from "../../../firebase-config"

const JoinForm = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [pwConfirm, setPwConfirm] = useState("")
  const [flag, setFlag] = useState(false)

  const JoinFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFlag(true)
    e.preventDefault()

    if (!(name && email && pw && pwConfirm)) {
      Toast.fire({
        icon: "warning",
        text: "모든 칸을 채워주세요.",
      })
    }

    if (pw !== pwConfirm) {
      Toast.fire({
        icon: "warning",
        text: "비밀번호와 비빌번호 확인 값은 같아야 합니다.",
      })
    }

    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)

    await createdUser?.user?.updateProfile({
      displayName: name,
      // photoURL:
      //   "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    })

    const body = {
      email: createdUser?.user?.multiFactor.user.email,
      displayName: createdUser?.user?.multiFactor.user.displayName,
      uid: createdUser?.user?.multiFactor.user.uid,
      // photoURL:
      //   "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    }

    console.log(body)

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/join`, body)
      .then((response) => {
        setFlag(false) // 회원가입이 완료되면 다시 버튼 활성화해주기
        if (response.data.success) {
          Toast.fire({
            icon: "success",
            text: "Go!Street 회원가입을 축하드립니다 :>",
          }).then(() => {
            navigate("/login")
          })
        } else {
          return Toast.fire({
            icon: "error",
            text: "회원가입에 실패하였습니다.",
          })
        }
      })
  }

  return (
    <Form style={S.styles.container}>
      <LoginInput
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
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

      <Button
        disabled={flag}
        btnType="highlighted"
        onClick={(e) => JoinFunc(e)}
      >
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
