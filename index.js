// const express = require('express');
// const cors = require('cors');

// const router = require('./router')

// const PORT = process.env.PORT || 5000;

// const app = express();

// app
//   // .set('view engine', 'ejs')
//   .use(cors())
//   .use(express.json())
//   .use(router)

// (async function () {
//   try {
//     app.listen(PORT, () => console.log('Server running on port ' + PORT));
//   } catch (err) {
//     console.error(err);
//   }
// })()

// index.js

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const port = 3031;

const postsRouter = require("./routes");

app.use(logger("dev"));

const dbUrl = process.env.MONGO_URL;

var options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/posts", postsRouter);

app.listen(port, function () {
  console.log("Runnning on " + port);
});
module.exports = app;