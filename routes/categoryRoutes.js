const express = require('express');
const { body } = require('express-validator');
const { createCategory, getAllCategories } = require('../controllers/categoryController');
const router = express.Router();

router.post(
  '/',
  [
    body('category_name').notEmpty().withMessage('Category name is required'),
  ],
  createCategory
);

router.get('/', getAllCategories);

module.exports = router;
