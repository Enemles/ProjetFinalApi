const DataTypes = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "movie",
    {
      movieName: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      releaseDate: {
        type: DataTypes.DATE,
      },
      globalRating: {
        type: DataTypes.NUMBER,
      },
    },
    {
      timestamps: false,
    }
  );
};
