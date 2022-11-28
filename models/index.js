const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize(
  `${dbConfig.database}`,
  `${dbConfig.username}`,
  `${dbConfig.password}`,
  {
    host: `${dbConfig.hostname}`,
    dialect: 'mysql',
  }
);

module.exports = {
  instance,
  user: require('./user')(instance),
  movie: require('./movie')(instance),
  review: require('./review')(instance),
  role: require('./role')(instance),
};


instance.models.user.belongsTo(instance.models.role, {
  as: 'role',
  foreignKey: 'roleId',
});
instance.models.review.belongsTo(instance.models.movie, {
  as: 'movie',
  foreignKey: 'moviename',
});
instance.models.review.belongsTo(instance.models.user, {
  as: 'user',
  foreignKey: 'username',
});
