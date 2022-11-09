import React from "react"
import { Story } from "@storybook/react"
import PostList from "./index"

export default {
  title: "molecules/PostList",
  components: PostList,
}

const Template: Story = (args) => <PostList {...args} />

export const Defalut = Template.bind({})
