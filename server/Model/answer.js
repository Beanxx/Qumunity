"use strict";

const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema(
  {
    content: Object,
    votes: { type: Number, default: 0 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  },
  { collection: "answers", timestamps: true }
);

module.exports = mongoose.model("answer", answerSchema);
