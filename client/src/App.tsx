import React from "react"
import { Routes, Route } from "react-router-dom"
import axios from "axios"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Main from "./pages/Main/Main"
import Post from "./pages/Post"
import Header from "./components/templates/Header/Header"
import Login from "./pages/Login/Login"
import Join from "./pages/Join/Join"
import Mypage from "./pages/Mypage"
import Users from "./pages/Users"
import Detail from "./pages/Detail/Detail"
import Footer from "./components/templates/Footer/Footer"
import Ask from "./pages/Ask/Ask"

const App = () => {
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
          <Route path="/post" element={<Post />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
