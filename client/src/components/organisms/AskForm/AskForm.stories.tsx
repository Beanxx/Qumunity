import React from "react"
import { Story } from "@storybook/react"
import AskForm, { Props } from "./AskForm"

export default {
  title: "organisms/AskForm",
  component: AskForm,
}

const Template: Story<Props> = (args) => <AskForm {...args} />

export const Default = Template.bind({})

Default.args = {
  id: "answer",
  title: "Title",
  children:
    "Be specific and imagine you’re asking a question to another person.",
  type: "default",
}
