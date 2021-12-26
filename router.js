const express = require("express");
const router = express.Router();
const questions = require("./controllers/question.controllers");

console.log(">>>> Router imported questions object", questions)

router.get("/", questions.greeting);
router.get("/questions", questions.getQuestions);
router.post("/questions", questions.postQuestion);


module.exports = router;