const { Schema, model } = require("../config/db-connection");

const commentsSchema = Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  comment: [
    {
      content: String,
    },
  ],
  city: {
    type: String,
  },
  state: {
    type: String,
  },
});

module.exports = model("Comments", commentsSchema);
