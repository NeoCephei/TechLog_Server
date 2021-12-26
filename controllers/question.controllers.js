const db = require('../models/question.model');

const sendMessage = async (req, res) => {
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

const getQuestion = async (req, res) => {
  try {
  } catch (error) {
  }
};

module.exports = {
  sendMessage,
  getQuestion,
};