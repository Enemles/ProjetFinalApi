const DataTypes = require('sequelize');
const { movie } = require('.');

module.exports = (instance) => {
  return instance.define(
    'review',
    {
      reviewId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
      },
      like: {
        type: DataTypes.INTEGER,
      },
      moviename: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
