const express = require('express');
const { body } = require('express-validator');
const { createProduct, getAllProducts } = require('../controllers/productController');
const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
    body('stock').isInt({ min: 0 }).withMessage('Stock must be a non-negative integer'),
    body('category_id').notEmpty().withMessage('Category ID is required'),
  ],
  createProduct
);

router.get('/', getAllProducts);

module.exports = router;
