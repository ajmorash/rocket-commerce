const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const ObjectID = require('mongodb').ObjectID;

const Product = require('../../models/Product');

router
.get('/', (req, res) => {
  Product.find()
  .then(products => res.status(200).json(products));
})
.get('/:id', (req,res) => {
  Product.findById(req.params.id)
  .then(product => res.status(200).json(product));
})
.post('/', auth, (req, res) => {

  const newProduct = new Product(req.body);

  newProduct.save()
    .then(product => res.json(product))
    .catch(err => res.json(err));


})
.post('/:id', auth, (req,res) => {

  const id = (req.params.id ? ObjectID(req.params.id) : ObjectID(0));

  const productDetails = req.body;

  Product.updateOne(
    { _id: id},
    productDetails,
    {}
  )
    .then(product => res.json(product))
    .catch(err => res.json(err));
})
.delete('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
