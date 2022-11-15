import React from "react"
import { Story } from "@storybook/react"
import PostList, { Props } from "./PostList"

export default {
  title: "organisms/PostList",
  component: PostList,
}

const Template: Story<Props> = (args) => <PostList {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
