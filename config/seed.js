// Require connection file to connect
const mongoose = require("./db-connection.js");
// Require Models for delete and create operations
const Comment = require("../models/Comment.js");

const comments = [];
