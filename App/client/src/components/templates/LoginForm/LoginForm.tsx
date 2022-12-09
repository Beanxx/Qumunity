import React, { useState } from "react"
import { useNavigate } from "react-router"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import firebase from "../../../firebase-config"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import Toast from "../../atoms/Toast/Toast"
import { schemaLogin } from "../../../hooks/validationYup"
import { Box, Message } from "../JoinForm/styles"
import Modal from "../../atoms/Modal"

interface ErrorType {
  code: string
}

type Inputs = {
  email: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [isShow, setIsShow] = useState(false)

  const onClose = () => {
    setIsShow(false)
  }

  const handleClick = () => {
    onClose()
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({ resolver: yupResolver(schemaLogin), mode: "onChange" })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
      Toast.fire({
        icon: "success",
        text: "로그인에 성공하셨습니다.",
      }).then(() => {
        navigate("/")
      })
    } catch (error: unknown) {
      console.log(error)
      const err = error as ErrorType
      if (err.code === "auth/user-not-found") {
        Toast.fire({
          icon: "error",
          text: "존재하지 않는 이메일입니다.",
        }).then(() => {
          reset()
        })
      } else if (err.code === "auth/wrong-password") {
        Toast.fire({
          icon: "error",
          text: "비밀번호가 일치하지 않습니다.",
        }).then(() => {
          reset()
        })
      } else {
        Toast.fire({
          icon: "error",
          text: "로그인에 실패하였습니다.",
        }).then(() => {
          reset()
        })
      }
    }
  }

  // 비밀번호 재설정 이메일 전송 event
  const onSendPwResetEmail = async () => {
    const auth = getAuth()
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        Toast.fire({
          icon: "success",
          text: "메일을 확인해주세요.",
        }).then(() => {
          setEmail("")
          onClose()
        })
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          text: "회원가입하지 않은 이메일입니다.",
        })
      })
  }

  return (
    <Form id="login" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <LoginInput id="email" type="email" register={register("email")}>
          Email
        </LoginInput>
        {errors.email && <Message>{errors.email.message}</Message>}
      </Box>
      <Box>
        <LoginInput
          id="password"
          type="password"
          sub="Forgot passowrd?"
          register={register("password")}
          onClick={() => setIsShow(true)}
        >
          Password
        </LoginInput>
        {errors.password && <Message>{errors.password.message}</Message>}
      </Box>
      <Button disabled={isSubmitting} btnType="highlighted" type="submit">
        Login
      </Button>

      {isShow && (
        <Modal
          title="Forgot Password?"
          onConfirm={onSendPwResetEmail}
          value={email}
          onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          onClose={handleClick}
        >
          비밀번호 재설정 메일을 받을 이메일을 입력해주세요.
        </Modal>
      )}
    </Form>
  )
}

export default LoginForm
