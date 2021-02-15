const express = require('express');
const router = express.Router();

const Product = require('../../models/Product');

router
.get('/', (req, res) => {
  Product.find()
  .then(products => res.status(200).json(products));
})
.post('/', (req, res) => {
  // if(req.body.id){
  //
  // }

  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    description: req.body.description,
    imageURL: req.body.imageURL,
    height: req.body.height,
    length: req.body.length,
    width: req.body.width,
    weight: req.body.weight
  })

  newProduct.save()
    .then(product => res.json(product));
})
.delete('/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => product.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
