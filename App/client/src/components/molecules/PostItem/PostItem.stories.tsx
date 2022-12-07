import React from "react"
import { Story } from "@storybook/react"
import PostItem from "./PostItem"
import { postType } from "../../../types/post.interface"

export default {
  title: "molecules/PostItem",
  components: PostItem,

  // argTypes: {
  //   profileImg: {},
  //   userName: { control: { type: "text" } },
  //   createdDate: {},
  // },
}

const Template: Story<{ postData: postType }> = (args) => <PostItem {...args} />

export const Default = Template.bind({})

// Default.args = {
//   postData: {
//     _id: "1",
//     postNum: 1,
//     title: "제목",
//     summary: "질문내용",
//     content: "질문내용",
//     tags: ["javascript, typescript"],
//     createdDate: "2022-11-10",
//     votes: 0,
//     answers: 0,
//     views: 0,
//     author: {
//       _id: "1",
//       userNum: 1,
//       email: "1",
//       displayName: "username",
//       uid: "1",
//       __v: 1,
//     },
//   },
// }
