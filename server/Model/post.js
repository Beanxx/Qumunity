"use strict";

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postNum: Number,
  title: String,
  content: String,
  tags: Array,
  createDate: { type: Date, default: Date.now },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("post", PostSchema);
