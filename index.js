import cors from 'cors'
import router from './router'

const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(router)

(async function () {
  try {
    app.listen(PORT, () => console.log('Server running on port ' + PORT));
  } catch (err) {
    console.error(err);
  }
})()