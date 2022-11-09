import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Post from "./pages/Post"
import Header from "./components/templates/Header"
import Login from "./pages/Login"
import Join from "./pages/Join"
import Mypage from "./pages/Mypage"
import Users from "./pages/Users"
import Detail from "./pages/Detail"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/post" element={<Post />} />
        <Route path="/users" element={<Users />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
