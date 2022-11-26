import React, { useState, useEffect } from "react"
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

  const onSendPwResetEmail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    const auth = getAuth()
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("이메일을 확인해 주세요.")
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        alert("등록되지 않은 이메일입니다.")
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
        >
          Password
        </LoginInput>
        {errors.password && <Message>{errors.password.message}</Message>}
      </Box>
      <Button disabled={isSubmitting} btnType="highlighted" type="submit">
        Login
      </Button>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button btnType="highlighted" onClick={onSendPwResetEmail}>
        비밀번호 찾기
      </Button>
    </Form>
  )
}

export default LoginForm
