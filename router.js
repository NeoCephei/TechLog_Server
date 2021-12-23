const express = require("express");
const message = require("./controllers/message");

const router = express.Router();

router.get('/messages', message.getAll);
router.post('/messages', message.postOne);

export default router;