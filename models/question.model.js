const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  description: { type: String, required: true},
  image: { type: String, required: true},
  correct: { type: String, required: true},
  wrong: { type: [String], required: true}
});

module.exports = mongoose.model("TechLog", QuestionSchema);