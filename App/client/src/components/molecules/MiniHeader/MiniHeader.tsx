import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import Button from "../../atoms/Button"
import Container from "./MiniHeader.styles"

export type Props = {
  children: React.ReactNode
}

const MiniHeader: React.FC<Props> = ({ children }) => {
  const isLogin = useSelector((state: RootState) => state.user.accessToken)

  return (
    <Container>
      <h1>{children}</h1>
      <Link to={isLogin ? "/ask" : "/login"}>
        <Button btnType="highlighted" width="auto">
          Ask Question
        </Button>
      </Link>
    </Container>
  )
}

export default MiniHeader
