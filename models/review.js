const DataTypes = require("sequelize");
const { movie } = require(".");

module.exports = (instance) => {
  return instance.define(
    "review",
    {
      reviewId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true,
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
