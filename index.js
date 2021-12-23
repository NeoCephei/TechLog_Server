// const express = require('express');
// const cors = require('cors');

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

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})
