var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = express();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('joinForm', { title: '회원가입폼'});
});

router.post('/',function(req,res,next){
    console.log('req.body :' +req.body);
    res.json(req.body);
});

module.exports = router;
module.exports = app;
