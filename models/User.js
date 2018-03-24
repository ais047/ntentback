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
});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crytpo.pbkdf2Sync(password, this.salt, 1000, 64,
    'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

module.exports = mongoose.model('User', UserSchema)