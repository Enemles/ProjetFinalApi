const app = require('./app.js');
const db = require('./models/index');

db.instance
  .sync({ force: false })
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(3000, () => {
      console.log('My server running at http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
