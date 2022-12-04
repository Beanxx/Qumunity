import React, { useState, useEffect } from "react"
import axios from "axios"
import SearchInput from "../../components/atoms/SearchInput"
import UserList from "../../components/templates/UserList/UserList"
import Layout from "./styles"

const Users = () => {
  const [inputSearch, setInputSearch] = useState("")
  const [usersData, setUsersData] = useState([])

  const getUsersData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/users`
      )
      setUsersData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsersData()
  }, [])

  return (
    <Layout>
      <div className="top_container">
        <h1 className="page_title">Users</h1>
        <div className="search_box">
          <SearchInput setInputSearch={setInputSearch} />
        </div>
      </div>
      <UserList usersData={usersData} />
    </Layout>
  )
}

export default Users
