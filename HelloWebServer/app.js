// import modules
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// connect database

mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open", function () {
    console.log("DB연결성공!");
});
db.on("error", function (err) {
    console.log("DB ERROR :", err);
});

// view setting
app.set("view engine", 'ejs')
// set middlewares

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// set routes
app.get('/', (req, res) => {
	res.send("ang");
});


// start server
app.listen(3000, function(){
    console.log('서버 부팅완료!');
});