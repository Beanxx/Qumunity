"use strict";

const mongoose = require("mongoose");

const PostCollectionSchema = new mongoose.Schema({
  name: String,
  totalPost: Number,
});

module.exports = mongoose.model("postCollection", PostCollectionSchema);
