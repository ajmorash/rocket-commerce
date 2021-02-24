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
    type: Number,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  imageURL: {
    type: String,
    default: ""
  },
  height: {
    type: Number,
    default: 0
  },
  length: {
    type: Number,
    default: 0
  },
  width: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Product = mongoose.model('products', ProductSchema);
