var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('example-page/index');
  res.redirect('/examples');
});

module.exports = router;
