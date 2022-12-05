const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userNum: Number,
    email: String,
    displayName: String,
    uid: String,
    photoURL: String,
    voteLike: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
    voteDisLike: [{ type: mongoose.Schema.Types.ObjectId, default: [] }],
    questions: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
