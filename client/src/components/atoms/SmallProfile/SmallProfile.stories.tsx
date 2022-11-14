import React from "react"
import { Story } from "@storybook/react"
import SmallProfile, { Props } from "./index"

export default {
  title: "atoms/SmallProfile",
  component: SmallProfile,

  argTypes: {
    profileImg: {},
    userName: { control: { type: "text" } },
    createdDate: {},
  },
}

const Template: Story<Props> = (args) => <SmallProfile {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
