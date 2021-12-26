const express = require("express");
const router = express.Router();
const questions = require("./controllers/questions.controllers");

router.get("/", questions.sendMessage);

module.exports = router;