// import modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// connect database
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open",function() {
    console.log("DB Connected!");
});
db.on("error",function (err) {
    console.log("DB ERROR :", err);
});

// model setting

// view setting

// set middlewares
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
// start server
app.listen(3000, function(){
    console.log('Server on!');
});
