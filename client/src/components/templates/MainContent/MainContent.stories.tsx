import React from "react"
import { Story } from "@storybook/react"
import MainContent from "./MainContent"

export default {
  title: "templates/MainContent",
  component: MainContent,
}

const Template: Story = (args) => <MainContent {...args} />

export const Default = Template.bind({})

// Default.args = {
//   profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
//   userName: "userName",
//   createdDate: "2022-11-10",
//   title: "제목",
//   content: "질문내용",
//   tags: ["javascript, typescript"],
// }
