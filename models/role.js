const DataTypes = require("sequelize");

module.exports = (instance) => {
  return instance.define(
    "role",
    {
      roleId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
      },
      roleName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
