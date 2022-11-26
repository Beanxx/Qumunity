interface authorType {
  _id: string
  userNum: number
  email: string
  displayName: string
  uid: string
  __v: number
}

export default interface answerType {
  _id: string
  content: string
  createdDate: string
  votes: number
  author: authorType
  postId: string
}
