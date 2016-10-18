var db = require('./../mongo');
var mongoose = require('mongoose');

var User = mongoose.model('user', db.usersSchema);

module.exports = User;