'use strict';
var express = require('express');
var posts = express();
var controller = require('./controller');

posts.get('/', controller.find);
posts.get('/:id', controller.findById);
posts.post('/', controller.create);
posts.put('/:id', controller.findByIdAndUpdate);
posts.delete('/:id', controller.delete);

module.exports = posts;