const db = require('../models/topics');

exports.getAll = async ctx => {
  try {
    const res = await db.getAll();
    ctx.status = 200;
    ctx.body = res;
  } catch (e) {
    ctx.stats = 500;
    ctx.body = e;
  }
};

exports.postOne = async ctx => {
  const topic = {
    topicId: 'SuperMagicID',
    title : ctx.request.body,
    score: 0,
    createdAt: Date.now(),
  };
  try {
    await db.saveOne(topic);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
  }
};

exports.putUpvote = async ctx => {
  try {
    await db.upvote(ctx.request.body);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
  }
};
exports.putDownvote = async ctx => {
  try {
    await db.downvote(ctx.request.body);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
  }
};
exports.delete = async ctx => {
  try {
    ctx.status = 201;
    await db.deleteTopic(ctx.request.body);
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
  }
};