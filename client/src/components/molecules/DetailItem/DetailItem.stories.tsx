import React from "react"
import { Story } from "@storybook/react"
import DetailItem, { Props } from "./DetailItem"

export default {
  title: "molecules/DetailItem",
  component: DetailItem,
}

const Template: Story<Props> = (args) => <DetailItem {...args} />

export const Question = Template.bind({})

Question.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
  detailType: "question",
}

export const Answer = Template.bind({})

Answer.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
  detailType: "answer",
}
