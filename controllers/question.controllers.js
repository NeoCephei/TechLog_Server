const TechLog = require('../models/question.model');

const greeting = async (req, res) => {
  try {
    res
    .status(200)
    .send('Hello server is running with the controllers done')
    .end();
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getQuestions = async (req, res) => {
  try {
    const questions = await TechLog.find();
    res.status(200).send(questions);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postQuestion = async (req, res) => {
  try {
    const { description, image, correct, wrong } = req.body;
    const question = await TechLog.create({
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