'use strict';
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var posts = require('./api/posts');
var port = process.env.port || 8080;

// DB CONNECT
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once("open", function() {
    console.log("DB Connected!");
});
db.on("error", function (err) {
    console.log("DB ERROR :", err);
});



// view setting
app.set('port', port);
app.set("view engine", 'ejs');
app.set('views', __dirname + '/views');
// set middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use('/posts', posts)

// start server
app.listen(port, function (err) {
  if (!err) {
    console.log('서버 부팅완료!');
  }
});
