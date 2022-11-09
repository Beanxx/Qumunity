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
          <Button buttonType="primary">Login</Button>
          <Button buttonType="primary">Join</Button>
        </S.ButtonContianer>
      </S.Container>
    </S.Layout>
  )
}

export default Header
