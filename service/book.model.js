const { sequelize } = require('../database.model');
const { DataTypes } = require('sequelize');

const Book = sequelize.define(
  'books',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      auto_increment: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Book;
