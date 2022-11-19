import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import * as S from "./styles"
import { ReactComponent as QuestionImg } from "../../../assets/icons/questionmark.svg"
import firebase from "../../../firebase-config"
import Toast from "../../atoms/Toast/Toast"

// interface Props {
//   JoinFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
// }

const JoinForm = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pw, setPw] = useState("")
  const [pwConfirm, setPwConfirm] = useState("")
  const [flag, setFlag] = useState(false)
  // const [nameCheck, setNameCheck] = useState(false)
  // const [nameInfo, setNameInfo] = useState("")

  const JoinFunc = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFlag(true) // 회원가입 버튼 한번 클릭하면 flag를 true로 변경하여 버튼이 disabled 상태가 되도록 설정
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

    // if (!nameCheck) {
    //   Toast.fire({
    //     icon: "warning",
    //     text: "닉네임 중복검사를 진행해주세요.",
    //   })
    // }

    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, pw)

    await createdUser.user?.updateProfile({
      displayName: name,
      // photoURL:
      //   "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    })

    const body = {
      email: createdUser.user?.multiFactor.user.email,
      displayName: createdUser.user?.multiFactor.user.displayName,
      uid: createdUser.user?.multiFactor.user.uid,
      // photoURL:
      //   "https://kr.object.ncloudstorage.com/community-bucket/post/profile.png",
    }

    axios.post("/api/user/join", body).then((response) => {
      console.log(body)

      setFlag(false) // 회원가입이 완료되면 다시 버튼 활성화해주기
      if (response.data.success) {
        Toast.fire({
          icon: "success",
          text: "회원가입에 성공하였습니다 :>",
        }).then(() => {
          navigate("/")
        })
      } else {
        Toast.fire({
          icon: "error",
          text: "회원가입에 실패하였습니다.",
        })
      }
    })
  }

  // const NameCheckFunc = (e: { preventDefault: () => void }) => {
  //   e.preventDefault()
  //   if (!name) {
  //     Toast.fire({
  //       icon: "warning",
  //       text: "닉네임을 입력해주세요.",
  //     })
  //   }

  //   const body = { displayName: name }

  //   axios.post("/api/user/namecheck", body).then((response) => {
  //     if (response.data.success) {
  //       if (response.data.check) {
  //         setNameCheck(true)
  //         setNameInfo("사용가능한 닉네임입니다.")
  //       } else {
  //         setNameInfo("사용불가능한 닉네임입니다.")
  //       }
  //     }
  //   })
  // }

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
