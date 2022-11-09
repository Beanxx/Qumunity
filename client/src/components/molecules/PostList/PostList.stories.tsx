import React from "react"
import { Story } from "@storybook/react"
import PostList, { Props } from "./index"

export default {
  title: "molecules/PostList",
  components: PostList,

  argTypes: {
    profileImg: {},
    userName: { control: { type: "text" } },
    createdDate: {},
  },
}

const Template: Story<Props> = (args) => <PostList {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
