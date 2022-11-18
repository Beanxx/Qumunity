import React from "react"
import { Story } from "@storybook/react"
import DetailContent, { Props } from "./DetailContent"

export default {
  title: "templates/DetailContent",
  component: DetailContent,
}

const Template: Story<Props> = (args) => <DetailContent {...args} />

export const Default = Template.bind({})

Default.args = {
  profileImg: `${process.env.PUBLIC_URL}/logo192.png`,
  userName: "userName",
  createdDate: "2022-11-10",
}
