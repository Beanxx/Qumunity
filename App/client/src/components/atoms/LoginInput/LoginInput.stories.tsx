import React from "react"
import { Story } from "@storybook/react"
import LoginInput, { Props } from "./index"

export default {
  title: "atoms/LoginInput",
  component: LoginInput,

  argTypes: {
    children: { control: { type: "text" } },
  },
}

const Template: Story<Props> = (args) => <LoginInput {...args} />

export const Default = Template.bind({})
