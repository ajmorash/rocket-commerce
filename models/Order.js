const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderProductSchema = new Schema({
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
  id: {
    type: String,
    required: true
  }
})

const OrderSchema = new Schema({
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
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  payment_method: {
    type: String,
    default: ""
  },
  payment_approved: {
    type: Boolean,
    default: ""
  },
  payment_method: {
    type: String,
    default: ""
  },
  products: [OrderProductSchema],
  created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Order = mongoose.model('orders', OrderSchema);
