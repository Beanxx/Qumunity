"use strict";

const { User } = require("../../Model/User.js");
const { Counter } = require("../../Model/Counter.js");
const Post = require("../../Model/post.js");

const output = {
  myQuestions: async (req, res) => {
    try {
      const myQuestionsData = await Post.find().populate("author").exec();
      return res.status(200).json(myQuestionsData);
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
};

module.exports = { output, process };
