const express = require('express');
const { body } = require('express-validator');
const { createCustomer, getAllCustomers } = require('../controllers/customerController');
const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Customer name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('phone').isMobilePhone().withMessage('Invalid phone number format'),
  ],
  createCustomer
);

router.get('/', getAllCustomers);

module.exports = router;
