import React from "react"
import { Story } from "@storybook/react"
import FilterButtons from "./FilterButtons"

export default {
  title: "atoms/FilterButtons",
  components: FilterButtons,
}

const Template: Story = (args) => <FilterButtons {...args} />

export const Default = Template.bind({})
