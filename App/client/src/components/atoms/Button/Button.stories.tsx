import React from "react"
import { Story } from "@storybook/react"
import Button, { Props } from "."

export default {
  title: "atoms/Button",
  component: Button,

  argTypes: {
    children: { control: { type: "text" } },
    color: { control: "color" },
    width: { control: "text" },
    onClick: { action: "clicked" },
  },
}

const Template: Story<Props> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: "버튼",
}
