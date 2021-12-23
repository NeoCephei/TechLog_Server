const express = require('express');
const cors = require('cors');

// const router = require('./router')

const PORT = process.env.PORT || 5000;

const app = express();

app
  // .set('view engine', 'ejs')
  .use(cors())
  .use(express.json())
  // .use(router)

(async function () {
  try {
    app.listen(PORT, () => console.log('Server running on port ' + PORT));
  } catch (err) {
    console.error(err);
  }
})()
