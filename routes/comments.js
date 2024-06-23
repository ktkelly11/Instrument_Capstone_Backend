const { Router } = require("express");
const commentsCtrl = require("../controllers/comments.js");

const router = Router();

router.post("/", commentsCtrl.createComment);

router.get("/", commentsCtrl.getComment);

router.put("/:id", commentsCtrl.updateComment);

router.delete("/:id", commentsCtrl.deleteComment);

module.exports = router;
