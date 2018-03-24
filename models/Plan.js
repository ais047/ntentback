const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Provider = require('./Provider');

let PlanSchema = new mongoose.Schema({
    title: String,
    date: Date,
    time: String,
    provider: String,
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Plan', PlanSchema)