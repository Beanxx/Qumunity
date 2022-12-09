import React from "react"
import { Story } from "@storybook/react"
import Button, { ButtonProps } from "./index"

export default {
  title: "TestButton",
  component: Button,
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  buttonType: "default",
  isFull: false,
  children: "버튼",
}

export const Primary = Template.bind({})

Primary.args = {
  buttonType: "primary",
  isFull: false,
  children: "버튼",
}

export const Ghost = Template.bind({})

Ghost.args = {
  buttonType: "ghost",
  isFull: false,
  children: "버튼",
}
