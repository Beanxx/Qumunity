import React from "react"
import { Story } from "@storybook/react"
import SideBar from "./SideBar"

export default {
  title: "templates/SideBar",
  component: SideBar,
}

const Template: Story = (args) => <SideBar {...args} />

export const Default = Template.bind({})
