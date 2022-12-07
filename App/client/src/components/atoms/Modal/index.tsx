import React from "react"
import ReactDOM from "react-dom"
import Button from "../Button"
import LoginInput from "../LoginInput"
import * as S from "./styles"

interface Prop {
  onClose?: () => void
}

interface Props {
  title?: string
  onConfirm?: () => void
  value?: string
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  onClose?: () => void
  children?: React.ReactNode
}

const Backdrop: React.FC<Prop> = ({ onClose }) => {
  return <S.Backdrop onClick={onClose} />
}

const ModalOverlay: React.FC<Props> = ({
  title,
  children,
  onConfirm,
  value,
  onChange,
  onClose,
}) => {
  return (
    <S.Container>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        <p>{children}</p>
        <LoginInput value={value} onChange={onChange} />
      </main>
      <footer>
        <Button btnType="highlighted" onClick={onClose}>
          취소
        </Button>
        <Button btnType="highlighted" onClick={onConfirm}>
          확인
        </Button>
      </footer>
    </S.Container>
  )
}

const Modal: React.FC<Props> = ({
  onConfirm,
  title,
  onChange,
  onClose,
  value,
  children,
}) => {
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root") as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          onConfirm={onConfirm}
          value={value}
          onChange={onChange}
          onClose={onClose}
        >
          {children}
        </ModalOverlay>,
        document.getElementById("overlay-root") as HTMLElement
      )}
    </div>
  )
}

export default Modal
