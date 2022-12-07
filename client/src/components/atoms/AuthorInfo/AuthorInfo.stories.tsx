import React from "react"
import { Story } from "@storybook/react"
import AuthorInfo, { Props } from "./AuthorInfo"

export default {
  title: "atoms/AuthorInfo",
  component: AuthorInfo,

  argTypes: {
    profileImg: {},
    userName: { control: { type: "text" } },
    createdDate: {},
  },
}

const Template: Story<Props> = (args) => <AuthorInfo {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
