const app = require('./app.js');
const { sequelize } = require('./database.model');

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('My server running at http://127.0.0.1');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
