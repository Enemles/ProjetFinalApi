const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize('sequelize', 'root', 'azertyuiop', {
  host: 'localhost',
  dialect: 'mysql',
});

exports.books = require('./service/book.model');
