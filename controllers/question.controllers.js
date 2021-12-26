const questions = require('../models/question.model');

const greeting = async (req, res) => {
  try {
    res
    .status(200)
    .send('I think its gonna work now')
    .end();
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getQuestions = async (req, res) => {
  try {
    const dbQuestion = await questions.find();
    res.status(200).send(dbQuestion);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postQuestion = async (req, res) => {
  try {
    const { description, image, correct, wrong } = req.body;
    const question = await questions.create({
      description,
      image,
      correct,
      wrong,
    });
    res.status(201).send(question);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  greeting,
  getQuestions,
  postQuestion
};