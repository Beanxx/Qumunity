"use strict";

const Post = require("../../Model/post");

const output = {
  detail: async (req, res) => {
    try {
      const detailData = await Post.findOne({ postNum: req.params.id })
        .populate("author")
        .exec();
      res.status(200).json(detailData);
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  },
};

const process = {};

module.exports = {
  output,
  process,
};
