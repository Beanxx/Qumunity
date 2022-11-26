"use strict";

const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  content: String,
  createdDate: { type: Date, default: Date.now },
  votes: { type: Number, default: 0 },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("answer", answerSchema);
