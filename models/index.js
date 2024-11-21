const User = require('./User');
const Role = require('./Role');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');
const Customer = require('./Customer');

const sequelize = require('../config/database');

// Relations
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

Customer.hasMany(Order, { foreignKey: 'customer_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });

module.exports = { User, Role, Product, Category, Order, Customer, sequelize };
