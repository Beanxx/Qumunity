import React from "react"
import { Story } from "@storybook/react"
import Main from "./Main"

export default {
  title: "pages/Main",
  component: Main,
}

export const MainPage: Story = (args) => <Main {...args} />
