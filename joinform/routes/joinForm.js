var express = require('express');
var router = express.Router();

// connect database

mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open", function () {
    console.log("DB연결성공!");
});
db.on("error", function (err) {
    console.log("DB ERROR :", err);
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('joinForm', { title: '회원가입폼'});
});

router.post('/',function(req,res,next){
    console.log('req.body :' +req.body);
    res.json(req.body);
});

module.exports = router;
