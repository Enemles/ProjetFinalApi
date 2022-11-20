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
        type: DataTypes.DATEONLY,
      },
      globalRating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
