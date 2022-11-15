const DataTypes = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "review",
    {
      reviewId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoincrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      commentaire: {
        type: DataTypes.STRING,
      },
      like: {
        type: DataTypes.NUMBER,
      },
      movieName: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
