import React from "react"
import { Story } from "@storybook/react"
import PostList from "./PostList"
import postType from "../../../types/post.interface"

export default {
  title: "organisms/PostList",
  component: PostList,
}

const Template: Story<{ postData: postType[] }> = (args) => (
  <PostList {...args} />
)

export const Default = Template.bind({})

Default.args = {
  postData: [
    {
      _id: "1",
      postNum: 1,
      title: "제목",
      summary: "질문내용",
      content: "질문내용",
      tags: ["javascript, typescript"],
      createdDate: "2022-11-10",
      votes: 0,
      answers: 0,
      views: 0,
      author: {
        _id: "1",
        userNum: 1,
        email: "1",
        displayName: "username",
        uid: "1",
        __v: 1,
      },
    },
    {
      _id: "1",
      postNum: 2,
      title: "제목",
      summary: "질문내용",
      content: "질문내용",
      tags: ["javascript, typescript"],
      createdDate: "2022-11-10",
      votes: 0,
      answers: 0,
      views: 0,
      author: {
        _id: "1",
        userNum: 1,
        email: "1",
        displayName: "username",
        uid: "1",
        __v: 1,
      },
    },
  ],
}
