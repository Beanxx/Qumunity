import React from "react"
import { Story } from "@storybook/react"
import Tag, { Props } from "./Tag"

export default {
  title: "atoms/Tag",
  component: Tag,

  argTypes: {
    children: { control: { type: "text" } },
  },
}

const Template: Story<Props> = (args) => <Tag {...args} />

export const Default = Template.bind({})

Default.args = {
  children: "태그",
}
