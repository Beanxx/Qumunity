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
      await User.findOneAndUpdate(
        { _id: postData.author },
        { $inc: { questions: 1 } }
      ).exec();

      for (let el of tags) {
        await Tags.findOneAndUpdate(
          { tagName: el },
          { $inc: { tagCount: 1 } },
          { upsert: true }
        ).exec();
      }

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  edit: async (req, res) => {
    const data = {
      title: req.body.title,
      summary: req.body.summary,
      content: req.body.content,
      tags: req.body.tags,
    };
    const previousTags = req.body.previousTags;
    try {
      for (let el of previousTags) {
        const updatedTag = await Tags.findOneAndUpdate(
          { tagName: el },
          { $inc: { tagCount: -1 } },
          { new: true }
        ).exec();
        if (updatedTag.tagCount <= 0) {
          await Tags.deleteOne({ tagName: el });
        }
      }

      for (let el of data.tags) {
        await Tags.findOneAndUpdate(
          { tagName: el },
          { $inc: { tagCount: 1 } },
          { upsert: true }
        ).exec();
      }

      await Post.findOneAndUpdate(
        { postNum: Number(req.body.postNum) },
        { $set: data }
      );

      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

module.exports = {
  process,
};
