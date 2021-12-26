const express = require("express");
const router = express.Router();
const questions = require("./controllers/question.controllers");

router.get("/", questions.greeting);
router.get("/questions", questions.getQuestions);
router.post("/questions", questions.postQuestion);


module.exports = router;