const path = require('path'); //use this to make file path-dirname brings you to lhe location of the file where you are. It's gets the path to this files folder // Use the path module to make it work on all operating systems
const express = require('express');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   console.log('shop.js', adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;

//5:03
