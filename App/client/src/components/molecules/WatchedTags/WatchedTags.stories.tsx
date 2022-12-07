import React from "react"
import { Story } from "@storybook/react"
import WatchedTags from "./WatchedTags"

export default {
  title: "molecules/WatchedTags",
  component: WatchedTags,
}

const Template: Story = (args) => <WatchedTags {...args} />

export const Default = Template.bind({})
