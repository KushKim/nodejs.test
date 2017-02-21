'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  title:      { type: String, required: true },
  body:       { type: String, required: true },
  createdAt:  { type: Date, default: Date.now },
  updatedAt:  Date
});

module.exports = mongoose.model('post', postSchema);