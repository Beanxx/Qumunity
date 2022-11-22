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
      id: "1",
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      id: "2",
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
    {
      id: "3",
      profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
      userName: "userName",
      createdDate: "2022-11-10",
      title: "제목",
      content: "질문내용",
      tags: ["javascript, typescript"],
    },
  ],
}
