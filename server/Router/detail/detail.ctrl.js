"use strict";

const Post = require("../../Model/post");
const Answer = require("../../Model/answer");
const Tags = require("../../Model/tags");

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
  view: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { postNum: req.params.id },
        { $inc: { views: 1 } }
      );
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  edit: async (req, res) => {
    try {
    } catch (err) {}
  },
  delete: async (req, res) => {
    const tags = req.body.tags;
    try {
      await Post.deleteOne({ _id: req.body._id }).exec();
      await Answer.deleteMany({ postId: req.body._id }).exec();

      tags.map(async (el) => {
        const updatedTag = await Tags.findOneAndUpdate(
          { tagName: el },
          { $inc: { tagCount: -1 } },
          { new: true }
        ).exec();
        if (updatedTag.tagCount === 0) {
          await Tags.deleteOne({ tagName: el });
        }
      });

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
