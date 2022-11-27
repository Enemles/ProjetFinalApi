const DataTypes = require('sequelize');

module.exports = (instance) => {
  return instance.define(
    'movie',
    {
      moviename: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      releasedate: {
        type: DataTypes.DATEONLY,
      },
      globalrating: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
};
