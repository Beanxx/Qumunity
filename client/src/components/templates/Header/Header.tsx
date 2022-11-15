import React from "react"
import { Link } from "react-router-dom"
import * as S from "./styles"
import SearchInput from "../../atoms/SearchInput"
import Button from "../../atoms/Button"

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
            <Button btnType="highlighted">Login</Button>
          </Link>
          <Link to="/join">
            <Button btnType="highlighted">Join</Button>
          </Link>
        </S.ButtonContianer>
      </S.Container>
    </S.Layout>
  )
}

export default Header
