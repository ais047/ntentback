var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

//List all books
router.get('/', function(req, res, next) {
  Book.find(function(err, products){
    if (err) return next(err);
    res.json(products);
  });
});

//Single Book by ID
router.get('/:id', function(req,res, next){
  Book.findById(req.params.id, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Save Book
router.post('/', function(req, res, next){
  Book.create(req,body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

//Update Book
router.put('/:id', function(req, res, next){
  Book.findByIdAndUpdate(req.params.id, req.bdy, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Delete Book
router.delete(':/id', function(req, res, next){
  Book.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;