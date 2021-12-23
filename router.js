const express = require('express');
const topics = require('./controllers/topics');

const router = express.Router();

router.get('/', topics.getAll);
router.post('/', topics.postOne);
router.put('/upvote', topics.putUpvote);
router.put('/downvote', topics.putDownvote);
router.delete('/', topics.delete);

module.exports = router;