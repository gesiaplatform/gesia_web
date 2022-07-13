var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_en');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/index_en', function(req, res, next) {
  res.render('index_en');
});

module.exports = router;
