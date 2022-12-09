import React, { useState, useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { getInput } from "../../redux/reducers/searchSlice"
import SearchInput from "../../components/atoms/SearchInput"
import UserList from "../../components/templates/UserList/UserList"
import Layout from "./styles"
import { RootState } from "../../redux/store"

const Users = () => {
  const dispatch = useDispatch()
  const [usersData, setUsersData] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  const { search } = useSelector((state: RootState) => state.search)

  const getUsersData = async () => {
    const body = {
      search,
    }
    try {
      const { data } = await axios.post(`/api/user/users`, body)
      setUsersData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    dispatch(getInput(inputSearch))
  }, [inputSearch])

  useEffect(() => {
    getUsersData()
  }, [search])

  return (
    <Layout>
      <div className="top_container">
        <h1 className="page_title">Users</h1>
        <div className="search_box">
          <SearchInput
            setInputSearch={setInputSearch}
            placeholder="Search User Name..."
          />
        </div>
      </div>
      <UserList usersData={usersData} />
    </Layout>
  )
}

export default Users
