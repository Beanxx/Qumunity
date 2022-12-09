import React from "react"
import { Story } from "@storybook/react"
import MiniHeader, { Props } from "./MiniHeader"

export default {
  title: "molecules/MiniHeader",
  component: MiniHeader,
}

const Template: Story<Props> = (args) => <MiniHeader {...args} />

export const Default = Template.bind({})

Default.args = {
  children: "Questions",
}
