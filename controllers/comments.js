const Comments = require("../models/Comment");

module.exports = {
  createComment,
};

async function createComment(req, res) {
  try {
    const comments = await Comments.create(req.body);

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json("No Beuno:(");
  }
}
