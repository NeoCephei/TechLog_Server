// const express = require('express');

// // const router = require('./router')

// const PORT = process.env.PORT || 5000;

// const app = express();

// app
//   // .set('view engine', 'ejs')
//   .use(cors())
//   .use(express.json())
//   // .use(router)

// (async function () {
  //   try {
    //     app.listen(PORT, () => console.log('Server running on port ' + PORT));
    //   } catch (err) {
      //     console.error(err);
      //   }
      // })()
      
const express = require('express');
const cors = require('cors');

const router = require("./router");

const app = express();
const PORT = process.env.PORT || 8080;

app
  .use(cors())
  .use(express.json())
  .use(router)
  .get('/', (req, res) => {
    res
      .status(200)
      .send('Hello server is running')
      .end();
});

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Type "heroku ps:scale web=0" to quit.');
});