import React from "react"
import { Story } from "@storybook/react"
import AskForms from "./AskForms"

export default {
  title: "templates/AskForms",
  component: AskForms,
}

const Template: Story = (args) => <AskForms {...args} />

export const Default = Template.bind({})
