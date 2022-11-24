"use strict";

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: String,
  content: String,
  tags: Array,
  createDate: String,
});

module.exports = mongoose.model("post", PostSchema);
