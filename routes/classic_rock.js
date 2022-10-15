var express = require('express');
var router = express.Router();
var models = require('../models');
var createError = require('http-errors');
var classicRock = models.ClassicRock
/* GET users listing. */
router.get('/', function(req, res, next) {
  classicRock.findAll({raw:true}).then((result) => {
    res.send(result)
  });
});

router.param('uniqueId', function(req, res, next, id){
  classicRock.findByPk(id).then((result) => {
    if(result){
      res.send(result)
    } else {
      next(createError(404));
    }
  })
})

router.get('/:uniqueId', function(req, res, next) {
  res.send('This is unique get method and id is' + req.uniqueId)
})

module.exports = router;
