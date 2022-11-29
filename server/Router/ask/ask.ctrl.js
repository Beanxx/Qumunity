"use strict";

const Post = require("../../Model/post");
const Tags = require("../../Model/tags");
const { User } = require("../../Model/User");
const { Counter } = require("../../Model/Counter");

const process = {
  register: async (req, res) => {
    const postData = new Post(req.body);
    const tags = req.body.tags;
    try {
      const userInfo = await User.findOne({ uid: req.body.uid }).exec();
      postData.author = userInfo._id;
      const count = await Counter.findOne({ name: "counter" }).exec();
      postData.postNum = count.postNum;
      await postData.save();
      await Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } });

      tags.map(async (el) => {
        await Tags.findOneAndUpdate(
          { tagName: el },
          { $inc: { tagCount: 1 } },
          { upsert: true }
        ).exec();
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

module.exports = {
  process,
};
