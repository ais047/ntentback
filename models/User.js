var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    //Password needs to be salted with crypto which is to be added in future
    paymentinfo: {
        //To be updated after cryptos integrated
    },
    schedule: [],
    updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)