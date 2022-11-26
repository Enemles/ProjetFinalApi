const { DataTypes } = require('sequelize');

module.exports = (instance) => {
  return instance.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      token: {
        type: DataTypes.STRING,
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
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
      },
      reviewId: {
        type: DataTypes.INTEGER,
        get() {
          return this.getDataValue('id').split(';');
        },
        set(val) {
          this.setDataValue('id', val.join(';'));
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
