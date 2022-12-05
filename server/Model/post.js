"use strict";

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    postNum: Number,
    title: String,
    summary: String,
    content: Object,
    tags: Array,
    votes: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { collection: "posts", timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
