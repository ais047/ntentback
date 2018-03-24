const mongoose = require('mongoose');
const crypto = require('crypto');

let UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash: String,
    salt: String,
    paymentinfo: {
        //To be updated after cryptos integrated
    },
    schedule: [],
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)