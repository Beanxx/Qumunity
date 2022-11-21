import React from "react"
import { Story } from "@storybook/react"
import PostItem from "./PostItem"
import postType from "../../../types/post.interface"

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

Default.args = {
  postData: {
    profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
    userName: "userName",
    createdDate: "2022-11-10",
    title: "제목",
    content: "질문내용",
    tags: ["javascript, typescript"],
  },
}
