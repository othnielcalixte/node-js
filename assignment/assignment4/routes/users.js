const path = require('path');

const express = require('express');

const router = express.Router();

const formData = require('./form');

router.get('/users', (req, res, next) => {
  const products = formData.products;
  res.render('users', {
    prods: products,
    pageTitle: 'Users',
    hasProducts: products.length > 0,
  });
});

module.exports = router;
