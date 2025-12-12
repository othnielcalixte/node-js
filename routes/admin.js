const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

//admin/add-product => GET
router.get('/products', isAuth, adminController.getProducts);

// admin/add-product => POST
router.post('/add-product', isAuth, adminController.postAddProduct);

// this here: ":productId" is a variable indicated with a colon.
router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

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
