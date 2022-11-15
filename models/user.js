const { DataTypes, STRING } = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "user",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      roleId: {
        type: DataTypes.NUMBER,
      },
      reviews: {
        type: DataTypes.ARRAY(STRING),
      },
    },
    {
      timestamps: false,
    }
  );
};
