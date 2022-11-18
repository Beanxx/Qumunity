import React from "react"
import { Story } from "@storybook/react"
import Input, { Props } from "./Input"

export default {
  title: "atoms/Input",
  component: Input,

  argTypes: {
    id: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
    name: { control: { type: "text" } },
  },
}

const Template: Story<Props> = (args) => <Input {...args} />

export const Default = Template.bind({})
