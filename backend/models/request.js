const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

console.log('Connection to: ', url);

mongoose
  .connect(url)
  .then(() => {
    console.log('MongoDB connection successful.');
  })
  .catch(error => {
    console.log(
      'There was an issue connecting to the ongoDB database: ',
      error.message
    );
  });

const requestSchema = new mongoose.Schema({
  binId: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    required: true,
  },
  payload: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

requestSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Request', requestSchema);
