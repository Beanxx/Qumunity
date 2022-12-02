import { postType } from "./post.interface"

interface authorType {
  _id: string
  userNum: number
  email: string
  displayName: string
  uid: string
  __v: number
  photoURL: string
}

export default interface answerType {
  _id: string
  content: string
  createdAt: string
  updatedAt: string
  votes: number
  author: authorType
  postId: postType
}
