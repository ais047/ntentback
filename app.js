var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var html = require('html');

var plan = require('./routes/plan');
var user = require('./routes/user');
var provider = require('./routes/provider');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/4ntent', {
    promiseLibrary: require('bluebird')})
  .then(() => console.log('connection successful'))
  .catch((err) => console.log(err));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/plans', express.static(path.join(__dirname, 'dist')));
app.use('/plan', plan);
app.use('/users', express.static(path.join(__dirname, 'dist')));
app.use('/user', user);
app.use('/providers', express.static(path.join(__dirname, 'dist')));
app.use('/provider', provider);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;