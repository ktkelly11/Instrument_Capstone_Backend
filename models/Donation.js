const { Schema, model } = require("../config/db-connection");

const donationsSchema = Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  phoneNum: {
    type: String,
    required: true,
    unique: true,
    min: 9,
  },
  city: {
    type: String,
    // required: true,
  },
  state: {
    type: String,
    // required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  instrumentNum: {
    type: Number,
    required: true,
  },
});

module.exports = model("Donations", donationsSchema);
