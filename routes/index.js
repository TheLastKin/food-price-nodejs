var express = require('express');
var router = express.Router();
var services = require('../services/food-services');

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index', { title: 'Express', data: await services.getChickenEggs() });
});

module.exports = router;
