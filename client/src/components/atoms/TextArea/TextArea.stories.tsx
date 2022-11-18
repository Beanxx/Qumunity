import React from "react"
import { Story } from "@storybook/react"
import TextArea, { Props } from "./TextArea"

export default {
  title: "atoms/TextArea",
  component: TextArea,
}

const Template: Story<Props> = (args) => <TextArea {...args} />

export const Default = Template.bind({})
