"use strict";

const Post = require("../../Model/post");
const PostCollection = require("../../Model/postCollection");

const output = {
  main: (req, res) => {
    // db에서 게시물 data를 보내는 코드
    console.log("왜실행");
  },
  tagSearch: (req, res) => {
    // 검색
  },
};

const process = {
  test: (req, res) => {
    const TestPost = new Post(req.body);
    TestPost.save()
      .then(() => {
        res.status(200).json({ success: true });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

module.exports = {
  output,
  process,
};
