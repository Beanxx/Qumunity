"use strict";

const Post = require("../../Model/post");
const Tags = require("../../Model/tags");

const output = {
  main: async (req, res) => {
    console.log(req.body);

    const sort = {};
    if (req.body.sort === "newest") {
      sort.createdAt = -1;
    } else if (req.body.sort === "votes") {
      sort.votes = -1;
    } else if (req.body.sort === "views") {
      sort.views = -1;
    } else if (req.body.sort === "answered") {
      sort.answers = -1;
    } else if (req.body.sort === "unanswered") {
      sort.answers = 1;
    }
    try {
      const postData = await Post.find({
        $or: [
          { title: { $regex: req.body.search } },
          { summary: { $regex: req.body.search } },
          { content: { $regex: req.body.search } },
        ],
      })
        .populate("author")
        .sort(sort)
        .exec();

      const searchParams = req.body.params;
      const size = Number(searchParams.size);
      const page = Number(searchParams.page);
      const totalCount = postData.length;
      const totalPages = Math.round(totalCount / size);

      return res.status(200).json({
        contents: postData.slice(page * size, (page + 1) * size),
        pageNumber: page,
        pageSize: size,
        totalPages,
        totalCount,
        isLastPage: totalPages <= page,
        isFirstPage: page === 0,
      });
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
  tags: async (req, res) => {
    try {
      const tagData = await Tags.find().exec();
      return res.status(200).json(tagData);
    } catch (err) {
      return res.status(400).json({ success: false, msg: err });
    }
  },
};

const process = {
  tagSearch: (req, res) => {},
};

module.exports = {
  output,
  process,
};
