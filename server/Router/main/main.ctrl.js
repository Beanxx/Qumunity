"use strict";

const Post = require("../../Model/post");
const Tags = require("../../Model/tags");

const output = {
  main: async (req, res) => {
    try {
      const postData = await Post.find().populate("author").exec();
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
