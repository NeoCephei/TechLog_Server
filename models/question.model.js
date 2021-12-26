const client = require('./index');
const database = 'TechLog';

const getAll = async () => {
  try {
    const db = client.db(database); 
    const col = db.collection('Topic');
    const findOptions = {
      'topicId': 1,
      'title' : 1,
      'score': 1,
      'createdAt': 1,
      _id: 0
    };

    const result = col.find({},findOptions);
    return result;

  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('GET done');
  }
};