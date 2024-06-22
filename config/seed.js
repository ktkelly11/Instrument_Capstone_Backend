// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Comment = require("../models/Comment.js");

const comments = [
  {
    name: "Olive Miller",
    title: "The benefit of music to students",
    comment:
      "As a former teacher I have seen first hand how grateful students are to receive these secondhand musical instruments.  It means so much when they can take lessons and learn a new skill.",
  },
];

async function seed() {
  try {
    await Comment.deletMany({});

    const createdComments = await Comment.creat(comments);

    console.log("Comments", createdComments);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();
