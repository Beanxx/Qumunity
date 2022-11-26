import React from "react"
import { Story } from "@storybook/react"
import AnswerList from "./AnswerList"
import answerType from "../../../types/answer.interface"

export default {
  title: "organisms/AnswerList",
  component: AnswerList,
}

const Template: Story<{ answerData: answerType[] }> = (args) => (
  <AnswerList {...args} />
)

export const Default = Template.bind({})

Default.args = {}
