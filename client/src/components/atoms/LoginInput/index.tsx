import React from "react"
import * as S from "./styles"

export type Props = {
  children: React.ReactNode
  value: string
  type: string
  sub?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginInput: React.FC<Props> = ({
  children,
  value,
  type,
  sub,
  onChange,
}) => {
  return (
    <S.Container>
      <S.Box>
        <label htmlFor="title">{children}</label>
        <span>{sub}</span>
      </S.Box>

      <input
        defaultValue={value}
        onChange={onChange}
        type={type}
        autoComplete="off"
      />
    </S.Container>
  )
}

export default LoginInput
