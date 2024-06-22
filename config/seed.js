// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Comment = require("../models/Comment.js");

const comments = [
  {
    postNum: "9983166917",
    name: "Olive",
    title: "The benefit of music to students",
    comment:
      "As a former teacher I have seen first hand how grateful students are to receive these secondhand musical instruments.  It means so much when they can take lessons and learn a new skill.",
    city: "Fargo",
    state: "North Dakota",
  },
  {
    postNum: "1384209891",
    name: "Ray",
    title: "So many happy students",
    comment:
      "I help to repair the instruments in my spare time and occasionally make it to some of the performances and to see the smiles on the student's faces when they are standing on the stage and are being applauded makes the work so worth it.",
    city: "Lewiston",
    state: "Idaho",
  },
  {
    postNum: "8611160436",
    name: "Margaret",
    title: "",
    comment: "",
    city: "Fargo",
    state: "North Dakota",
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
