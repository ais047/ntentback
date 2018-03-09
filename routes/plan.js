var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Plan = require('../models/Plan.js');

//List all Plan
router.get('/', function(req, res, next) {
  Plan.find(function(err, products){
    if (err) return next(err);
    res.json(products);
  });
});

//Single Plan by ID
router.get('/:id', function(req,res, next){
  Plan.findById(req.params.id, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Save Plan
router.post('/', function(req, res, next){
  Plan.create(req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

//Update Plan
router.put('/:id', function(req, res, next){
  Plan.findByIdAndUpdate(req.params.id, req.bdy, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Delete Plan
router.delete(':/id', function(req, res, next){
  Plan.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;