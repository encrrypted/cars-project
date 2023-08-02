const mongoose = require('mongoose');

const Scema = mongoose.Schema

const userScema = new Scema({
 userName: String,
 log: String,
 pass: String
})

const User = mongoose.model('User', userScema)

module.exports = User