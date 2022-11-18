import React from "react"
import { Story } from "@storybook/react"
import Ask from "./Ask"

export default {
  title: "pages/Ask",
  component: Ask,
}

const Template: Story = (args) => <Ask {...args} />

export const Default = Template.bind({})
