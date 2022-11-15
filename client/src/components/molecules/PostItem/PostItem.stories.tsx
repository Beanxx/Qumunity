import React from "react"
import { Story } from "@storybook/react"
import PostItem, { Props } from "./PostItem"

export default {
  title: "molecules/PostItem",
  components: PostItem,

  argTypes: {
    profileImg: {},
    userName: { control: { type: "text" } },
    createdDate: {},
  },
}

const Template: Story<Props> = (args) => <PostItem {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
