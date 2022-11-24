"use strict";

const Post = require("../../Model/post");
const { User } = require("../../Model/User");
const { Counter } = require("../../Model/Counter");

const process = {
  register: (req, res) => {
    const postData = new Post(req.body);
    // User.findOne({ uid: req.body.uid })
    User.findOne({ uid: "EBBpe61iGYhwOG7BXAGgcidGZUn2" })
      .exec()
      .then((userInfo) => {
        postData.author = userInfo._id;

        Counter.findOne({ name: "counter" })
          .exec()
          .then((count) => {
            postData.postNum = count.postNum;

            postData.save().then(() => {
              Counter.updateOne(
                { name: "counter" },
                { $inc: { postNum: 1 } },
                () => {
                  res.status(200).json({ success: true });
                }
              );
            });
          });
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
        console.log(err);
      });
  },
};

module.exports = {
  process,
};
