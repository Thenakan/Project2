const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route for creating a product
router.post('/products', productController.createProduct);

// Route for getting a single product by ID
router.get('/products/:id', productController.getProduct);

// Route for updating a product by ID
router.put('/products/:id', productController.updateProduct);

// Route for deleting a product by ID
router.delete('/products/:id', productController.deleteProduct);

// Route for getting all products
router.get('/products', productController.getAllProducts);

module.exports = router;
