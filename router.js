const express = require("express");
const router = express.Router();
const questionController = require("./controllers/question.controllers");

router.get("/", questionController.greeting());
router.get("/questions", questionController.getQuestion());
router.post("/questions", questionController.postQuestion());


module.exports = router;