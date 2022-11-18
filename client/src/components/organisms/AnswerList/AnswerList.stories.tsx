import React from "react"
import { Story } from "@storybook/react"
import AnswerList, { Props } from "./AnswerList"

export default {
  title: "organisms/AnswerList",
  component: AnswerList,
}

const Template: Story<Props> = (args) => <AnswerList {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
