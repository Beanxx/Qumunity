import React from "react"
import axios from "axios"
import { useNavigate } from "react-router"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import LoginInput from "../../atoms/LoginInput"
import Button from "../../atoms/Button"
import Form from "../../../layouts/Form/Form"
import * as S from "./styles"
import Toast from "../../atoms/Toast/Toast"
import { ReactComponent as QuestionImg } from "../../../assets/icons/questionmark.svg"
import firebase from "../../../firebase-config"
import { schemaJoin } from "../../../hooks/validationYup"

type Inputs = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const JoinForm = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({ resolver: yupResolver(schemaJoin), mode: "onChange" })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)

    await createdUser?.user?.updateProfile({
      displayName: data.name,
      photoURL: `https://source.boringavatars.com/beam/130/${data.name}?square`,
    })

    const body = {
      email: createdUser?.user?.multiFactor.user.email,
      displayName: createdUser?.user?.multiFactor.user.displayName,
      uid: createdUser?.user?.multiFactor.user.uid,
      photoURL: `https://source.boringavatars.com/beam/130/${createdUser?.user?.multiFactor.user.displayName}?square`,
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/user/join`, body)
      .then((response) => {
        if (response.data.success) {
          Toast.fire({
            icon: "success",
            text: "회원가입에 성공하였습니다.",
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
    <Form
      id="join"
      style={S.styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <S.Box>
        <LoginInput id="name" type="text" register={register("name")}>
          NickName
        </LoginInput>
        {errors.name && <S.Message>{errors.name.message}</S.Message>}
      </S.Box>
      <S.Box>
        <LoginInput id="email" type="email" register={register("email")}>
          Email
        </LoginInput>
        {errors.email && <S.Message>{errors.email.message}</S.Message>}
      </S.Box>
      <S.Box>
        <LoginInput
          id="password"
          type="password"
          register={register("password")}
        >
          Password
        </LoginInput>
        {errors.password && <S.Message>{errors.password.message}</S.Message>}
      </S.Box>
      <S.Box>
        <LoginInput
          id="confirmPw"
          type="password"
          register={register("confirmPassword")}
        >
          Confirm Password
        </LoginInput>
        {errors.confirmPassword && (
          <S.Message>{errors.confirmPassword.message}</S.Message>
        )}
      </S.Box>

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

      <Button disabled={isSubmitting} btnType="highlighted" type="submit">
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
