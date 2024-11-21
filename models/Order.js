const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  total_amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  customer_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = Order;
