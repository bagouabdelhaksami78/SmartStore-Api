const express = require('express');
const { body } = require('express-validator');
const { createOrder, getAllOrders } = require('../controllers/orderController');
const router = express.Router();

router.post(
  '/',
  [
    body('order_date').isISO8601().withMessage('Invalid date format'),
    body('total_amount').isFloat({ gt: 0 }).withMessage('Total amount must be greater than 0'),
    body('customer_id').notEmpty().withMessage('Customer ID is required'),
  ],
  createOrder
);

router.get('/', getAllOrders);

module.exports = router;
