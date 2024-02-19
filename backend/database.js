const Sequelize = require('sequelize');

const sequelize = new Sequelize('shopping_app', 'root', 'Bandimamba@99', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
