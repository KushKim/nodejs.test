'use strict';
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 3000;

// DB CONNECT
/*mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;

db.once("open", function() {
    console.log("DB Connected!");
});
db.on("error", function (err) {
    console.log("DB ERROR :", err);
});
*/


// view setting
app.set('port', port);
app.set("view engine", 'ejs');
app.set('views', __dirname + '/views/asdf.html');
// set middlewares
app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(port, function (err) {
  if (!err) {
    console.log('Server On!');
  }
});
