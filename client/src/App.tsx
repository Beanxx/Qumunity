import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import { RootState } from "./redux/store"
import firebase from "./firebase-config"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Main from "./pages/Main/Main"
import Header from "./components/templates/Header/Header"
import Login from "./pages/Login/Login"
import Join from "./pages/Join/Join"
import Mypage from "./pages/Mypage"
import Users from "./pages/Users/Users"
import Detail from "./pages/Detail/Detail"
import Footer from "./components/templates/Footer/Footer"
import Ask from "./pages/Ask/Ask"
import { loginUser } from "./redux/reducers/userSlice"

interface userState {
  displayName: string
  uid: string
  accessToken: string
}

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user)

  // 테스트 코드입니다.
  // axios
  //   .post(`${process.env.REACT_APP_API_URL}/main/test`, {
  //     title: "지금추가",
  //     content: "지금추가",
  //   })
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user))
      }
    })
  }, [])

  useEffect(() => {
    localStorage.setItem("token", user.accessToken)
  }, [user])

  // useEffect(() => {
  //   firebase.auth().signOut()
  // }, [])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/ask" element={<Ask />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
