const client = require('./index');
const database = 'Assassment';

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
    const sortOptions = {'createdAt': 1};

    const result = [];
    const colDocuments = col.find({},findOptions).sort(sortOptions);

    await colDocuments.forEach(doc => result.push(doc));
    return result;
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('GET done');
  }
};

const saveOne = async (topic) => {
  try {
    const db = client.db(database); 
    const col = db.collection('Topic');
    const newTopic = {
      'topicId' : topic.authorId,
      'title' : topic.title,
      'score': topic.score,
      'createdAt' : topic.createdAt
    };
    const p = await col.insertOne(newTopic);
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('GET done');
  }
};

const upvote = async (content) => {
  try {
    const db = client.db(database); 
    const col = db.collection('Topic');

    const p = await col.update({content: content}, {score: score+1});
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('Upvote done');
  }
};
const downvote = async (content) => {
  try {
    const db = client.db(database); 
    const col = db.collection('Topic');

    const p = await col.update({content: content}, {score: score-1});
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('Upvote done');
  }
};
const deleteTopic = async (content) => {
  try {
    const db = client.db(database); 
    const col = db.collection('Topic');

    const p = await col.delete({content: content}, 1);
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('Upvote done');
  }
};

module.exports = { getAll, saveOne, upvote, downvote, deleteTopic };