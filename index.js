const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(express.json());

app.use('/roles', roleRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/customers', customerRoutes);
app.use('/orders', orderRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Base de données synchronisée');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Serveur démarré sur le port ${process.env.PORT}`);
  });
});
