import React from "react"
import { Story } from "@storybook/react"
import PostItem from "./PostItem"
import { postType } from "../../../types/post.interface"

export default {
  title: "molecules/PostItem",
  components: PostItem,

  // argTypes: {
  //   profileImg: {},
  //   userName: { control: { type: "text" } },
  //   createdDate: {},
  // },
}

const Template: Story<{ postData: postType }> = (args) => <PostItem {...args} />

export const Default = Template.bind({})
