import React from "react"
import { Story } from "@storybook/react"
import AnswerList from "./AnswerList"
import postType from "../../../types/post.interface"

export default {
  title: "organisms/AnswerList",
  component: AnswerList,
}

const Template: Story<{ detailData: postType }> = (args) => (
  <AnswerList {...args} />
)

export const Default = Template.bind({})

Default.args = {}
