"use strict";

const { User } = require("../../Model/User.js");
const { Counter } = require("../../Model/Counter.js");
const Post = require("../../Model/post.js");
const Answer = require("../../Model/answer.js");

const output = {
  user: async (req, res) => {
    try {
      const userInfo = await User.findOne({
        displayName: req.params.id,
      }).exec();

      return res.status(200).json(userInfo);
    } catch {
      return res.status(400).json({ success: false });
    }
  },

  myQuestions: async (req, res) => {
    try {
      const userInfo = await User.findOne({
        displayName: req.params.id,
      }).exec();

      const myQuestionsData = await Post.find({ author: userInfo._id })
        .populate("author")
        .exec();
      return res.status(200).json(myQuestionsData);
    } catch {
      return res.status(400).json({ success: false });
    }
  },

  myAnswers: async (req, res) => {
    try {
      const userInfo = await User.findOne({
        displayName: req.params.id,
      }).exec();

      const myAnswersData = await Answer.find({ author: userInfo._id })
        .populate("author")
        .populate("postId")
        .exec();
      return res.status(200).json(myAnswersData);
    } catch {
      return res.status(400).json({ success: false });
    }
  },
};

const process = {
  join: async (req, res) => {
    let temp = req.body;

    Counter.findOne({ name: "counter" })
      .then((doc) => {
        temp.userNum = doc.userNum;
        const userData = new User(req.body);
        userData.save().then(() => {
          Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
            () => {
              res.status(200).json({ success: true });
            }
          );
        });
      })
      .catch((err) => {
        res.status(400).json({ success: false });
      });
  },

  allUsers: async (req, res) => {
    let sort = {};
    sort.answers = -1;
    sort.questions = -1;

    try {
      const usersData = await User.find({
        displayName: { $regex: req.body.search },
      })
        .sort(sort)
        .exec();
      return res.status(200).json(usersData);
    } catch {
      return res.status(400).json({ success: false });
    }
  },
};

module.exports = { output, process };
