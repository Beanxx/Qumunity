export interface authorType {
  _id: string
  userNum: number
  email: string
  displayName: string
  uid: string
  __v: number
  photoURL: string
  voteLike: string[]
  voteDisLike: string[]
  questions: number
  answers: number
}

export interface postType {
  _id: string
  postNum: number
  title: string
  summary: string
  content: { html: string; markdown: string }
  tags: string[]
  createdAt: string
  updatedAt: string
  votes: number
  answers: number
  views: number
  author: authorType
}

export interface postLengthType {
  myQuestionLength?: number
  myAnswerLength?: number
  data?: authorType
}
