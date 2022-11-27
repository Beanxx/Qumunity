import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import InfoContainer from "../../components/templates/InfoContainer/InfoContainer"
import QnaContainer from "../../components/templates/QnaContainer/QnaContainer"
import Layout from "./styles"

const Mypage = () => {
  const { id } = useParams()

  const [myData, setMyData] = useState([])
  const myQuestionLength = myData.length

  const getMyQuestionData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/${id}`
      )
      setMyData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMyQuestionData()
  }, [])

  return (
    <Layout>
      <InfoContainer myQuestionLength={myQuestionLength} />
      <QnaContainer />
    </Layout>
  )
}

export default Mypage
