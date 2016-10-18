var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

module.exports.db = mongoose.connect('mongodb://127.0.0.1:27017/THON');

mongoose.connection.once('connected', function() {
  console.log('Connected to database');
});

module.exports.usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  voted: Boolean,
  salt: String,
}, {timestamps: true});

module.exports.technologiesSchema = new mongoose.Schema({
  name: String,
  imageSrc: String,
  category: String,
  likes: Number,
});

