"use strict";

const Answer = require("../../Model/answer");
const Post = require("../../Model/post");
const { User } = require("../../Model/User");

const output = {
  getAnswers: async (req, res) => {},
};

const process = {
  register: async (req, res) => {
    const answerData = new Answer(req.body);
    User.findOne({ uid: req.body.uid })
      .exec()
      .then((userInfo) => {
        answerData.author = userInfo._id;

        answerData.save(() => {
          Post.findOneAndUpdate(
            { _id: req.body.postId },
            { $inc: { answers: 1 } }
          )
            .exec()
            .then(() => {
              res.status(200).json({ success: true });
            });
        });
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
