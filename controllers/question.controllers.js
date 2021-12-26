const questions = require('../models/question.model');

const greeting = async (req, res) => {
  try {
    res
    .status(200)
    .send('Hello server is running expect db')
    .end();
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

const getQuestions = async (req, res) => {
  try {
    const questions = await questions.find();
    res.status(200).send(questions);
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

export default {
  greeting,
  getQuestions,
  postQuestion
};