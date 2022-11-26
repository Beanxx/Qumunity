import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import * as S from "./styles"

interface InputType {
  children?: React.ReactNode
  id?: string
  type?: string
  sub?: string
  onClick?: () => void
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export interface Props extends InputType {
  register?: UseFormRegisterReturn
}

const LoginInput = React.forwardRef((props: Props, ref) => {
  return (
    <S.Container>
      <S.Box>
        <label htmlFor={props.id}>{props.children}</label>
        <button type="button" onClick={props.onClick}>
          {props.sub}
        </button>
      </S.Box>

      <input
        id={props.id}
        type={props.type}
        autoComplete="off"
        value={props.value}
        onChange={props.onChange}
        {...props.register}
      />
    </S.Container>
  )
})

export default LoginInput
