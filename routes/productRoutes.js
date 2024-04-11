const express = require('express');
const router = express.Router();
const productController = require('../controller/productController.js');

router
  .route('/api/products')
  .post(productController.postProducts)
  .get(productController.getProducts);

router
  .route('/api/product/:id')
  .get(productController.getProduct)
  .delete(productController.delateProduct)
  .put(productController.updateProduct);

module.exports = router;
