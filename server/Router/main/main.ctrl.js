"use strict";

const Post = require("../../Model/post");
const Tags = require("../../Model/tags");

const output = {
  main: async (req, res) => {
    const sort = {};
    if (req.body.sort === "newest") {
      sort.createdAt = -1;
    } else if (req.body.sort === "votes") {
      sort.votes = -1;
    } else if (req.body.sort === "views") {
      sort.views = -1;
    } else if (req.body.sort === "answered") {
      sort.answers = -1;
    } else if (req.body.sort === "unanswered") {
      sort.answers = 1;
    }
    try {
      const postData = await Post.find().populate("author").sort(sort).exec();
      return res.status(200).json(postData);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  tags: async (req, res) => {
    try {
      const tagData = await Tags.find().exec();
      return res.status(200).json(tagData);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

const process = {
  tagSearch: (req, res) => {},
};

module.exports = {
  output,
  process,
};
