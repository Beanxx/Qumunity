"use strict";

const Post = require("../../Model/post");
const Answer = require("../../Model/answer");
const Tags = require("../../Model/tags");
const { User } = require("../../Model/User");

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
  like: async (req, res) => {
    try {
      const user = await User.findOne({ uid: req.body.userId });
      const isIncludesDislike = user.voteDisLike.includes(req.body.postId);
      const isIncludes = user.voteLike.includes(req.body.postId);

      if (isIncludesDislike) {
        await User.findOneAndUpdate(
          { uid: req.body.userId },
          { $pullAll: { voteDisLike: [req.body.postId] } },
          { new: true }
        );
        await Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { votes: 1 } }
        );
        return res.status(200).json({
          success: false,
          msg: "반대 취소",
        });
      }

      if (!isIncludes) {
        const like = await User.findOneAndUpdate(
          { uid: req.body.userId },
          { $push: { voteLike: req.body.postId } },
          { new: true }
        );
        await Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { votes: 1 } }
        );
        return res.status(200).json({
          success: true,
          msg: { like: like.voteLike },
        });
      } else {
        return res
          .status(200)
          .json({ success: false, msg: "이미 추천했습니다." });
      }
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  dislike: async (req, res) => {
    try {
      const user = await User.findOne({ uid: req.body.userId });
      const isIncludesLike = user.voteLike.includes(req.body.postId);
      const isIncludes = user.voteDisLike.includes(req.body.postId);

      if (isIncludesLike) {
        await User.findOneAndUpdate(
          { uid: req.body.userId },
          { $pullAll: { voteLike: [req.body.postId] } },
          { new: true }
        );
        await Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { votes: -1 } }
        );
        return res.status(200).json({
          success: false,
          msg: "추천취소",
        });
      }

      if (!isIncludes) {
        const disLike = await User.findOneAndUpdate(
          { uid: req.body.userId },
          { $push: { voteDisLike: req.body.postId } },
          { new: true }
        );
        await Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $inc: { votes: -1 } }
        );
        return res.status(200).json({
          success: true,
          msg: { disLike: disLike.voteDisLike },
        });
      } else {
        return res
          .status(200)
          .json({ success: false, msg: "이미 반대했습니다." });
      }
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

module.exports = {
  output,
  process,
};
