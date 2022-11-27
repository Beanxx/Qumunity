"use strict";

const { User } = require("../../Model/User.js");
const { Counter } = require("../../Model/Counter.js");

const process = {
  join: async (req, res) => {
    let temp = req.body;

    Counter.findOne({ name: "counter" })
      .then((doc) => {
        temp.userNum = doc.userNum;
        const userData = new User(req.body);
        userData.save().then(() => {
          Counter.updateOne({ name: "counter" }, { $inc: { userNum: 1 } }).then(
            () => {
              res.status(200).json({ success: true });
            }
          );
        });
      })
      .catch((err) => {
        res.status(400).json({ success: false });
      });
  },
};

module.exports = { process };
