'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var commentsSchema = new schema({
  author: String,
  text : String
});

module.exports = mongoose.model('Comment',commentsSchema)
