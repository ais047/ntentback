const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User.js');
const crypto = require('crypto');

//List all Users
router.get('/', function(req, res, next) {
  User.find(function(err, products){
    if (err) return next(err);
    res.json(products);
  });
});

//Single User by ID
router.get('/:id', function(req,res, next){
  User.findById(req.params.id, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Save User
router.post('/', function(req, res, next){
  User.create(req.body, function(err,post){
    if (err) return next(err);
    res.json(post);
  });
});

//Update User
router.put('/:id', function(req, res, next){
  User.findByIdAndUpdate(req.params.id, req.bdy, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

//Delete User
router.delete(':/id', function(req, res, next){
  User.findByIdAndRemove(req.params.id, req.body, function(err, post){
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;