import React from "react"
import { Story } from "@storybook/react"
import RelatedTags from "./RelatedTags"

export default {
  title: "molecules/RelatedTags",
  component: RelatedTags,
}

const Template: Story = (args) => <RelatedTags {...args} />

export const Default = Template.bind({})
