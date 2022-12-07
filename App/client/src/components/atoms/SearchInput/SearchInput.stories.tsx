import React from "react"
import { Story } from "@storybook/react"
import SearchInput, { Props } from "./index"

export default {
  title: "atoms/SearchInput",
  component: SearchInput,

  argTypes: {
    children: { control: { type: "text" } },
  },
}

const Template: Story<Props> = (args) => <SearchInput {...args} />

export const Default = Template.bind({})
