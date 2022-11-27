"use strict";

const Post = require("../../Model/post");

const output = {
  detail: async (req, res) => {
    try {
      const detailData = await Post.findOne({ postNum: req.params.id })
        .populate("author")
        .exec();
      return res.status(200).json(detailData);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

const process = {
  edit: async (req, res) => {
    try {
    } catch (err) {}
  },
  delete: async (req, res) => {
    try {
      console.log(req.body);
      await Post.deleteOne({ _id: req.body._id }).exec();
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

module.exports = {
  output,
  process,
};
