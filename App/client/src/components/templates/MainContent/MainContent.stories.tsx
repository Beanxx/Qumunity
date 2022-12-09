import React from "react"
import { Story } from "@storybook/react"
import MainContent from "./MainContent"

export default {
  title: "templates/MainContent",
  component: MainContent,
}

const Template: Story = (args) => <MainContent {...args} />

export const Default = Template.bind({})
