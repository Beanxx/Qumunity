import React from "react"
import { Story } from "@storybook/react"
import DetailItem, { Props } from "./DetailItem"

export default {
  title: "molecules/DetailItem",
  component: DetailItem,
}

const Template: Story<Props> = (args) => <DetailItem {...args} />

export const Question = Template.bind({})

Question.args = {
  detailData: {
    _id: "1",
    postNum: 1,
    title: "제목",
    summary: "질문내용",
    content: "질문내용",
    tags: ["javascript, typescript"],
    createdDate: "2022-11-10",
    votes: 0,
    answers: 0,
    views: 0,
    author: {
      _id: "1",
      userNum: 1,
      email: "1",
      displayName: "username",
      uid: "1",
      __v: 1,
    },
  },
  detailType: "question",
}

export const Answer = Template.bind({})

Answer.args = {
  detailData: {
    _id: "1",
    postNum: 1,
    title: "제목",
    summary: "질문내용",
    content: "질문내용",
    tags: ["javascript, typescript"],
    createdDate: "2022-11-10",
    votes: 0,
    answers: 0,
    views: 0,
    author: {
      _id: "1",
      userNum: 1,
      email: "1",
      displayName: "username",
      uid: "1",
      __v: 1,
    },
  },
  detailType: "answer",
}
