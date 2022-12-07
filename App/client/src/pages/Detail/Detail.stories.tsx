import React from "react"
import { Story } from "@storybook/react"
import Detail from "./Detail"

export default {
  title: "pages/Detail",
  component: Detail,
}

export const DetailPage: Story = (args) => <Detail {...args} />
