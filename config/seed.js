// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Comment = require("../models/Comment.js");

const comments = [
  {
    name: "Olive",
    title: "The benefit of this program is so great",
    comment:
      "I have seen first hand how grateful students are to receive these secondhand musical instruments.  It means so much when they can take lessons and learn a new skill.",
    city: "Fargo",
    state: "North Dakota",
  },
  {
    name: "Ray",
    title: "So many happy students",
    comment:
      "I help to repair the instruments in my spare time and occasionally make it to some of the performances and to see the smiles on the student's faces when they are standing on the stage and are being applauded makes the work so worth it.",
    city: "Lewiston",
    state: "Idaho",
  },
  {
    name: "Delores",
    title: "Lovely!",
    comment:
      "As soon as you see a student with a donated instrument, you can see the benefits of the program first hand!",
    city: "Marion",
    state: "North Dakota",
  },
  {
    name: "Jack",
    title: "Music is so important",
    comment:
      "For most students an extracuricular activity is so important and music and the ability to play an instrument opens up so many doors and opportunities",
    city: "Fargo",
    state: "North Dakota",
  },
  {
    name: "Margaret",
    title: "A love of music is within all of us",
    comment:
      "I adore my records, a love passed down from my father, and it has always been something I cherished.  While I never learned to play an instrument myself, I know how much music means to me and my own children and think this program is so beneficial to so many.",
    city: "Fargo",
    state: "North Dakota",
  },
  {
    name: "Jeff",
    title: "Music is so beautiful",
    comment:
      "I have performed in plays and can tell you have important music is to a production.  It is so lovely to see students get the opportunity to play instruments themselves.",
    city: "Fargo",
    state: "North Dakota",
  },
  {
    name: "Zach",
    title: "Teacher looking to get involved",
    comment:
      "Hello!  I am a public middle school band teacher and would love to get some of my students enrolled in the program and to donate my own time to help",
    city: "Cincinnati",
    state: "Ohio",
  },
  {
    name: "Maggie",
    title: "Music Therapist",
    comment:
      "Music is healing.  I see it everyday in my line of work.  I would hope that every student that wants to learn would have the opportunity to have an instrument provided to them.",
    city: "Burlington",
    state: "Vermont",
  },
  {
    name: "Katie",
    title: "Music is everywhere",
    comment:
      "I once had a teacher point out that music is everywhere.  We are often humming something in our heads or listening to our new favorite song on the radio.  It also helps all of the climatic moments in movies and TV.  Music is the soundtrack of our lives and I am so glad that instruments are helping these students learn to play and become even greater humans.",
    city: "Cincinnati",
    state: "Ohio",
  },
  {
    name: "Harper",
    title: "Please donate!",
    comment:
      "I can't tell you how wonderful it was to be able to see my old violin in the hands of a deserving student.  It was just gathering dust in my attic",
    city: "Covington",
    state: "Kentucky",
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
