import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import InfoContainer from "../../components/templates/InfoContainer/InfoContainer"
import QnaContainer from "../../components/templates/QnaContainer/QnaContainer"
import Layout from "./styles"

const Mypage = () => {
  const { id } = useParams()

  const [myQuestionData, setMyQuestionData] = useState([])
  const [myAnswerData, setMyAnswerData] = useState([])
  const myQuestionLength = myQuestionData.length
  const myAnswerLength = myAnswerData.length

  const getMyQuestionData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/myquestion/${id}`
      )
      setMyQuestionData(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getMyAnswerData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/user/myanswer/${id}`
      )
      setMyAnswerData(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMyQuestionData()
    getMyAnswerData()
  }, [])

  return (
    <Layout>
      <InfoContainer
        myQuestionLength={myQuestionLength}
        myAnswerLength={myAnswerLength}
      />
      <QnaContainer />
    </Layout>
  )
}

export default Mypage
