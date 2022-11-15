import React from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"
import Button from "../../atoms/ButtonExample"
import SearchInput from "../../atoms/SearchInput"

const Header = () => {
  return (
    <S.Layout>
      <div className="line-style" />
      <S.Container>
        <div className="logo-box">
          <Link to="/">Qumunity</Link>
        </div>
        <div className="search-box">
          <SearchInput />
        </div>
        <S.ButtonContianer>
          <Link to="/login">
            <Button buttonType="primary">Login</Button>
          </Link>
          <Link to="/join">
            <Button buttonType="primary">Join</Button>
          </Link>
        </S.ButtonContianer>
      </S.Container>
    </S.Layout>
  )
}

export default Header
