interface authorType {
  _id: string
  userNum: number
  email: string
  displayName: string
  uid: string
  __v: number
}

export interface postType {
  _id: string
  postNum: number
  title: string
  summary: string
  content: string
  tags: string[]
  createdDate: string
  votes: number
  answers: number
  views: number
  author: authorType
}

export interface postLengthType {
  myQuestionLength?: number
  myAnswerLength?: number
}
