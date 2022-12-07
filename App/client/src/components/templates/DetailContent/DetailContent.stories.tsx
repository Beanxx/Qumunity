import React from "react"
import { Story } from "@storybook/react"
import DetailContent from "./DetailContent"

export default {
  title: "templates/DetailContent",
  component: DetailContent,
}

const Template: Story = (args) => <DetailContent {...args} />

export const Default = Template.bind({})
