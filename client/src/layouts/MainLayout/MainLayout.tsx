import React from "react"
import { Outlet } from "react-router"
import SideBar from "../../components/templates/SideBar/SideBar"
import Container from "./styles"

const MainLayout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  )
}

export default MainLayout
