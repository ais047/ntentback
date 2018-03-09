var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Provider = require('../models/Provider.js');

//List all Provider
router.get('/', function(req, res, next) {
  Provider.find(function(err, products){
    if (err) return next(err);
    res.json(products);
  });
});

//Single Provider by ID
router.get('/:id', function(req,res, next){
  Provider.findById(req.params.id, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Save Provider
router.post('/', function(req, res, next){
  Provider.create(req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

//Update Provider
router.put('/:id', function(req, res, next){
  Provider.findByIdAndUpdate(req.params.id, req.bdy, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Delete Provider
router.delete(':/id', function(req, res, next){
  Provider.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;