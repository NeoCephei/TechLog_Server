const mongoose = require('./index');
const { Schema } = mongoose;

const messageSchema = new Schema({
  authorId: Boolean,
  content: String,
  createdAt: {type : Number, default: Date.now} 
});

const Messages = mongoose.model('MongooseMessages', messageSchema);

const getAll = async () => {
  try {
    const findOptions = {
      'authorId': 1,
      'content' : 1,
      'createdAt': 1,
      _id: 0
    };

    const result = await Messages.find({},findOptions);
    return result;
  } catch (e) {
    console.log('Error when getting');
  } finally {
    console.log('GET done');
  }
};

const saveOne = async (msg) => {
  try {
    const newMsg = {
      'authorId' : msg.authorId,
      'content' : msg.content,
      'createdAt' : msg.createdAt
    };

    const p = await Messages.create(newMsg);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('POST done');
  }
};

module.exports = { getAll, saveOne };