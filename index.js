const express = require('express');
const cors = require('cors');

const router = require("./router");
const db = require('./models')

const app = express();
const PORT = process.env.PORT || 8080;

app
  .use(cors())
  .use(express.json())
  .use(router);

// Start the server
(async function () {
  try {
    db;
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      console.log('Type "heroku ps:scale web=0" to quit.');
    });
  } catch (error) {
    console.log('>>>>> Error when starting server: ' + error);
  }
})();