const Comment = require("../models/Comment");

module.exports = {
  createComment,
};

async function createComment(req, res) {
  try {
    const comments = new Comment(req.body);

    await comments.save();

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json("Error");
  }
}
