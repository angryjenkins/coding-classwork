var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/people');
});

router.get('/test', function(req, res) {
  res.json(req.body);
});

module.exports = router;
