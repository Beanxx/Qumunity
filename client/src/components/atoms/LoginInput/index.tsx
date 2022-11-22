import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"
import * as S from "./styles"

// export type Props = {
//   children: React.ReactNode
//   value: string
//   type: string
//   sub?: string
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

interface InputType {
  children: React.ReactNode
  id: string
  type?: string
  sub?: string
}

export interface Props extends InputType {
  register?: UseFormRegisterReturn
}

const LoginInput = React.forwardRef((props: Props, ref) => {
  return (
    <S.Container>
      <S.Box>
        <label htmlFor={props.id}>{props.children}</label>
        <span>{props.sub}</span>
      </S.Box>

      <input
        id={props.id}
        type={props.type}
        autoComplete="off"
        {...props.register}
      />
    </S.Container>
  )
})

export default LoginInput
