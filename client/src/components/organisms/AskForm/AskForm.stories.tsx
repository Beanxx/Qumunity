import React from "react"
import { Story } from "@storybook/react"
import AskForm from "./AskForm"

export default {
  title: "organisms/AskForm",
  component: AskForm,
}

const Template: Story = (args) => <AskForm {...args} />

export const Default = Template.bind({})

// Default.args = {
//   profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
//   userName: "userName",
//   createdDate: "2022-11-10",
// }
