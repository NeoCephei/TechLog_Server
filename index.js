// const cool = require('cool-ascii-faces');
// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .get('/cool', (req, res) => res.send(cool()))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`));
const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./router')

const PORT = process.env.PORT || 5000;

const app = express();

app
  // .set('view engine', 'ejs')
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