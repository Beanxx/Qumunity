import React from "react"
import { Story } from "@storybook/react"
import MainContent, { Props } from "./MainContent"

export default {
  title: "templates/MainContent",
  component: MainContent,
}

const Template: Story<Props> = (args) => <MainContent {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
