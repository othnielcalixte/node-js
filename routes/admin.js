const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
//

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// //admin/add-product => GET
// router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// // // this here: ":productId" is a variable indicated with a colon.
// router.get('/edit-product/:productId', adminController.getEditProduct);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;

// exports.routes = router;
// exports.products = products;

//5:30

// router.get("/add-product", (req, res, next) => {
//   res.send(
//     '<form action="/admin/add-product" method="POST"><input type ="text" name="title"> <button type="submit">Add Product</button> </form>'
//   );
// });
// module.exports = router;
