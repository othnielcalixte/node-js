const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];

router.get('/', (req, res, next) => {
  res.render('form', {
    prods: products,
    pageTitle: 'form',
    path: '/',
  });
});

router.post('/', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/users');
});

exports.routes = router;
exports.products = products;
