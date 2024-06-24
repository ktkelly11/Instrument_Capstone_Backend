const Comment = require("../models/Comment");

module.exports = {
  createComment,
  getComment,
  updateComment,
  deleteComment,
};

async function createComment(req, res) {
  try {
    const comments = new Comment(req.body);

    await comments.save();

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getComment(req, res) {
  try {
    const comments = await Comment.find({});

    res.status(200).json(comments);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function updateComment(req, res) {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function deleteComment(req, res) {
  try {
    await Comment.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Successfully Deleted Comment" });
  } catch (err) {
    res.status(400).send(err);
  }
}
