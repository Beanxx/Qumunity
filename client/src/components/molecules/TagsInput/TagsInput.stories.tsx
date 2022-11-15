import React from "react"
import { Story } from "@storybook/react"
import TagsInput from "./TagsInput"

export default {
  title: "molecules/TagsInput",
  component: TagsInput,
}

const Template: Story = (args) => <TagsInput {...args} />

export const Default = Template.bind({})
