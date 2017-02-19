var express = require('express');

var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds157529.mlab.com:57529/kushkim");
var db = mongoose.connection;
db.once("open",function() {
    console.log("DB Connected!");
});
db.on("error",function (err) {
    console.log("DB ERROR :", err);
});

app.use(express.static(__dirname + '/public'));
app.listen(3000, function(){
    console.log('Server on!');
});
