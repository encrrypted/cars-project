const mongoose = require('mongoose')

const Scema = mongoose.Schema

const carScema = new Scema({
 name: {
  type: String,
  required: true,
  minLength: 2,
  maxLength: 20
 },
 model: {
  type: String, 
  require: true,
  minLength: 2,
  maxLength: 20
 },
 price: {
  type: Number,
  required: true,
  min: 1
 },
 image: {
  type: String
 }
}, {versionKey: false})

const Car = mongoose.model('Car', carScema)

module.exports = Car