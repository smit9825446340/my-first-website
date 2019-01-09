var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index0', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.post('/contact', function(req, res, next) {
  var i=req.body.n;
  
  res.render('contact', { title: i});
});
module.exports = router;
