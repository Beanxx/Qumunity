"use strict";

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  postNum: Number,
  title: String,
  summary: String,
  content: String,
  tags: Array,
  createdDate: { type: Date, default: Date.now },
  votes: { type: Number, default: 0 },
  answers: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("post", PostSchema);
