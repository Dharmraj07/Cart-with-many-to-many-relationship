const Sequelize = require('sequelize');

const sequelize = new Sequelize('march23am', 'root', '#@Dharm007', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
