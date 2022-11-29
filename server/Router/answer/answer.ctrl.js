"use strict";

const Answer = require("../../Model/answer");
const Post = require("../../Model/post");
const { User } = require("../../Model/User");

const output = {};

const process = {
  getAnswers: async (req, res) => {
    await Answer.find({ postId: req.body.postId })
      .populate("author")
      .exec()
      .then((data) => {
        return res.status(200).json({ success: true, answerList: data });
      })
      .catch((err) => {
        return res.status(400).json({ success: false, msg: err });
      });
  },

  register: async (req, res) => {
    const answerData = new Answer(req.body);
    try {
      const userInfo = await User.findOne({ uid: req.body.uid }).exec();
      answerData.author = userInfo._id;
      await answerData.save();
      await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $inc: { answers: 1 } }
      ).exec();
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  delete: async (req, res) => {
    try {
      await Answer.deleteOne({ _id: req.body._id }).exec();
      await Post.findOneAndUpdate(
        { _id: req.body.postId },
        { $inc: { answers: -1 } }
      ).exec();
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
