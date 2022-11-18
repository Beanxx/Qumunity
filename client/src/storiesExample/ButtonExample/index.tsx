import React, { FunctionComponent, HTMLProps } from "react"
import { ButtonLayout, ButtonLayoutProps } from "./styles"

export interface ButtonProps
  extends HTMLProps<HTMLButtonElement>,
    ButtonLayoutProps {}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  buttonType,
  isFull,
}) => {
  return (
    <ButtonLayout type="button" buttonType={buttonType} isFull={isFull}>
      {children}
    </ButtonLayout>
  )
}

export default Button
