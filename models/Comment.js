const { Schema, model } = require("../config/db-connection");

const commentsSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    min: 5,
  },
});

module.exports = model("Comments", commentsSchema);
