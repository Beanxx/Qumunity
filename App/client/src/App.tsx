import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"
import firebase from "./firebase-config"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Main from "./pages/Main/Main"
import Header from "./components/templates/Header/Header"
import Login from "./pages/Login/Login"
import Join from "./pages/Join/Join"
import Mypage from "./pages/Mypage/Mypage"
import Users from "./pages/Users/Users"
import Detail from "./pages/Detail/Detail"
import Footer from "./components/templates/Footer/Footer"
import Ask from "./pages/Ask/Ask"
import { loginUser } from "./redux/reducers/userSlice"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user))
      }
    })
  }, [])

  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/edit/:id" element={<Ask />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/user/:id" element={<Mypage />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
