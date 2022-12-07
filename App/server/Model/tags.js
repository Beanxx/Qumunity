"use strict";

const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  tagName: String,
  tagCount: Number,
});

module.exports = mongoose.model("tags", tagsSchema);
