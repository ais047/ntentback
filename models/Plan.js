var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Provider = require('./Provider');

var PlanSchema = new mongoose.Schema({
    title: String,
    date: Date,
    time: String,
    provider: String,
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Plan', PlanSchema)