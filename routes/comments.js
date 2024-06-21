const { Router } = require("express");
const commentsCtrl = require("../controllers/comments.js");

const router = Router();

router.post("/", commentsCtrl.createComment);

module.exports = router;
