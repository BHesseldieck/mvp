var db = require('./../mongo');
var mongoose = require('mongoose');

var Technologies = mongoose.model('technologies', db.technologiesSchema);

module.exports = Technologies;