const express = require('express');
const router = express.Router();
const Order = require('../../models/Order');
const Product = require('../../models/Product');
const auth = require('../../middleware/auth');

const ObjectID = require('mongodb').ObjectID;


router
  .get('/', auth, (req, res) => {
    Order.find()
      .then(orders => res.status(200).json(orders))
      .catch(err => res.json(err));
  })
  .post('/', auth, (req, res) => {
    const newOrder = new Order(req.body);
    const validOrder = validateOrder(newOrder.products);

    if(validOrder){
      newOrder.save()
      .then(order => {
        updateProductQuantities(order.products);
        res.send(order)
      })
      .catch(err => res.send(err));
    }
  })

const validateOrder = (orderProducts) => {
  const validOrder = true;
  orderProducts.forEach(orderProduct => {
    var productId = orderProduct.id ? ObjectID(orderProduct.id) : ObjectId(0);

    Product.findOne({ _id: productId })
      .then(dbProduct => {
        //If we have less quantity in stock than in the order the set to false
        console.log(dbProduct);
        if(dbProduct.quantity < orderProduct.quantity){
          validOrder = false;
        }
      })
      .catch(err => {
        console.log(err)
        validOrder = false;
      });
  });
  return validOrder;
}

const updateProductQuantities = (orderProducts) => {
  orderProducts.forEach(orderProduct => {
    var productId = orderProduct.id ? ObjectID(orderProduct.id) : ObjectId(0);

    Product.findOneAndUpdate({ _id: productId }, { $inc: { quantity: -Math.abs(orderProduct.quantity) }})
      .then(dbProduct => {
        console.log(`decremented quantity of ${dbProduct.id} by ${orderProduct.quantity}`);
        console.log(dbProduct);
      })
      .catch(err => console.log(err));
  });
}

module.exports = router;
