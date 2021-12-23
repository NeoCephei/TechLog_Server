'use strict';

const db = require('../models/message');

exports.getAll = async ctx => {
  try {
    const res = await db.getAll();
    ctx.status = 200;
    ctx.body = res;
  } catch (e) {
    ctx.stats = 500;
    ctx.body = e;
    console.log(e);
  }
};

exports.postOne = async ctx => {

  const msg = ctx.request.body;

  try {
    await db.saveOne(msg);
    ctx.status = 201;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(e);
  }
};