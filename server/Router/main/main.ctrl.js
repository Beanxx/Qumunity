"use strict";

const Post = require("../../Model/post");

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

    PostCollection.findOne({ name: "postCount" })
      .exec()
      .then((err, result) => {
        TestPost._id = result.totalPost;
      });

    TestPost.save()
      .then(() => {
        PostCollection.updateOne(
          { name: "postCount" },
          { $inc: { totalPost: 1 } },
          (err, result) => {
            res.status(200).json({ success: true });
          }
        );
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
      });
  },
};

module.exports = {
  output,
  process,
};
