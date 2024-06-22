const { Schema, model } = require("../config/db-connection");

const commentsSchema = Schema({
  postNum: {
    type: Number,
    // required: true,
    unique: true,
  },
  name: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  comment: {
    content: String,
    // required: true,
  },
  city: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
});

// App keeps crashing when I have required = true, which I have used before.  Unsure why that is happening...

module.exports = model("Comments", commentsSchema);
