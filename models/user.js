const { DataTypes } = require('sequelize');

module.exports = (instance) => {
  return instance.define(
    'user',
    {
      username: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      email: {
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
        allowNull: true,
        type: DataTypes.INTEGER,
        get() {
          if (this.getDataValue('reviewId')) {
            return this.getDataValue('reviewId').split(';');
          }
        },
        set(val) {
          this.setDataValue('reviewId', val.join(';'));
        },
      },
    },
    {
      timestamps: false,
    }
  );
};
