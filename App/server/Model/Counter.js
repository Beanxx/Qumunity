const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema(
  {
    name: String,
    userNum: Number,
    postNum: Number,
  },
  { collection: "counter" }
);

const Counter = mongoose.model("Counter", counterSchema);

module.exports = { Counter };
