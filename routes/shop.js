const path = require('path'); //use this to make file path-dirname brings you to lhe location of the file where you are. It's gets the path to this files folder // Use the path module to make it work on all operating systems
const express = require('express');

const shopController = require('../controllers/shop');

const rootDir = require('../util/path');

const adminData = require('./admin');

const router = express.Router();

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOder);

router.get('/orders', shopController.getOrders);

router.get('/', shopController.getIndex);

module.exports = router;

//5:03

// router.get('/', (req, res, next) => {
//   console.log('shop.js', adminData.products);
//   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });
