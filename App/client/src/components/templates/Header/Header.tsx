import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import firebase from "../../../firebase-config"
import { getInput } from "../../../redux/reducers/searchSlice"
import * as S from "./styles"
import SearchInput from "../../atoms/SearchInput"
import Button from "../../atoms/Button"

const Header = () => {
  const dispatch = useDispatch()
  const [inputSearch, setInputSearch] = useState("")
  const user = useSelector((state: RootState) => state.user)

  const logOutHandler = () => {
    firebase.auth().signOut()
  }

  useEffect(() => {
    dispatch(getInput(inputSearch))
  }, [inputSearch])

  return (
    <S.Layout>
      <div className="line-style" />
      <S.Container>
        <div className="logo-box">
          <a href="/">Qumunity</a>
        </div>
        <div className="search-box">
          <SearchInput
            setInputSearch={setInputSearch}
            placeholder="Search..."
          />
        </div>
        <S.ButtonContianer>
          {user.accessToken ? (
            <>
              <Link to={`/user/${user.displayName}`}>
                <Button btnType="highlighted">MyPage</Button>
              </Link>
              <a href="/">
                <Button btnType="highlighted" onClick={logOutHandler}>
                  LogOut
                </Button>
              </a>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button btnType="highlighted">Login</Button>
              </Link>
              <Link to="/join">
                <Button btnType="highlighted">Join</Button>
              </Link>
            </>
          )}
        </S.ButtonContianer>
      </S.Container>
    </S.Layout>
  )
}

export default Header
