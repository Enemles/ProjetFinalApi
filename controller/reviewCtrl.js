// imports
const models = require('../models');
const jwt = require('jsonwebtoken');

// routes
module.exports = {
  // createReview: async function (req, res) {
  //   try {
  //     //   const headerAuth = req.headers['authorization'];
  //     //   const roleId = jwt.getUserId(headerAuth);

  //     // params
  //     const { title, content } = req.body;

  //     if (title == null || content == null) {
  //       return res.status(400).json({ error: 'missing parameters' });
  //     }

  //     if (title.length <= 5 || content.length <= 10) {
  //       return res.status(400).json({ error: 'invalid parameters' });
  //     }

  //     console.log(title, content);

  //     const review = await models.review.create({
  //       title: title,
  //       content: content,
  //     });

  //     res.status(201).json(review);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getAllReviews: async function (req, res) {
    try {
      models.review.findAll({
        // order: [order != null ? order.split(':') : ['title', 'ASC']],
        // include: [
        //   {
        //     model: models.user,
        //     attributes: ['username'],
        //   },
        // ],
      });
      // .then(function (reviews) {
      //   if (reviews) {
      //     res.status(200).json(reviews);
      //   } else {
      //     res.status(404).json({ error: 'no review found' });
      //   }
      // });
    } catch (err) {
      console.log(err);
    }
  },
};
