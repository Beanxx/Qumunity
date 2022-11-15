import React from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout/MainLayout"
import Main from "./pages/Main/Main"
import Post from "./pages/Post"
import Header from "./components/templates/Header/Header"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Mypage from "./pages/Mypage"
import Users from "./pages/Users"
import Detail from "./pages/Detail"
import Footer from "./components/templates/Footer"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
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
