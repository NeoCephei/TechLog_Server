const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URL;
console.log('>>>>>',uri);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;