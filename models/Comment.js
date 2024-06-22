const { Schema, model } = require("../config/db-connection");

const commentsSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  comment: [
    {
      content: String,
      required: true,
    },
  ],
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

module.exports = model("Comments", commentsSchema);
