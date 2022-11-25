"use strict";

const Post = require("../../Model/post");

const output = {
  main: async (req, res) => {
    try {
      const postData = await Post.find().exec();
      res.json(postData);
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  },
  tagSearch: (req, res) => {},
};

const process = {};

module.exports = {
  output,
  process,
};
