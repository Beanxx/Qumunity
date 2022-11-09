import React from "react"
import { Story } from "@storybook/react"
import SmallProfile, { Props } from "./index"

export default {
  title: "atoms/SmallProfile",
  component: SmallProfile,

  argTypes: {
    children: { control: { type: "text" } },
  },
}

const Template: Story<Props> = (args) => <SmallProfile {...args} />

export const Default = Template.bind({})

// Default.args = {
//   children: "프로필",
// };
