const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number
  },
  description: {
    type: String
  },
  ImageURL: {
    type: String
  },
  height: {
    type: Number
  },
  length: {
    type: Number
  },
  width: {
    type: Number
  },
  weight: {
    type: Number
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('products', ProductSchema);
