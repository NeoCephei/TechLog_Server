import express from "express";
import message from "./controllers/message";

const router = express.Router();

router.get('/messages', message.getAll);
router.post('/messages', message.postOne);

export default router;