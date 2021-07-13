var express = require('express');
const axios = require('axios');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '第一次使用' });
});

module.exports = router;
