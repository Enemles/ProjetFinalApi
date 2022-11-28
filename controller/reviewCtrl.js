// imports
const { review } = require('../models');
const jwt = require('jsonwebtoken');

const reviewService = require('../services/review');

exports.getReviews = async (req, res) => {
  const listReviews = await reviewService.getReviews();
  res.json({ success: true, data: listReviews });
};

// exports.getUserById = async (req, res) => {
//   const username = parseInt(req.params.id);
//   const user = await userService.getUserById(username);
//   const reviews = reviewService.getReviewByUsername(username);
//   if (user && user.lenngth === 1) {
//     res.json({ success: true, header: user, data: reviews });
//   }
// };

// exports.delUser = async (req, res) => {
//   const username = parseInt(req.params.id);
//   await userService.delUser(username);
//   const user = await userService.getUserById(username);
//   if (!user) {
//     res.json({ success: true, description: 'User has been deleted' });
//   }
// };

// routes
// module.exports = {
//   // createReview: async function (req, res) {
//   //   try {
//   //     //   const headerAuth = req.headers['authorization'];
//   //     //   const roleId = jwt.getUserId(headerAuth);
//   //     // params
//   //     const { title, content } = req.body;
//   //     if (title == null || content == null) {
//   //       return res.status(400).json({ error: 'missing parameters' });
//   //     }
//   //     if (title.length <= 5 || content.length <= 10) {
//   //       return res.status(400).json({ error: 'invalid parameters' });
//   //     }
//   //     console.log(title, content);
//   //     const review = await models.review.create({
//   //       title: title,
//   //       content: content,
//   //     });
//   //     res.status(201).json(review);
//   //   } catch (err) {
//   //     console.log(err);
//   //   }
//   // },
//   //   getAllReviews: async function (req, res) {
//   //     try {
//   //       models.review.findAll({
//   //         // order: [order != null ? order.split(':') : ['title', 'ASC']],
//   //         // include: [
//   //         //   {
//   //         //     model: models.user,
//   //         //     attributes: ['username'],
//   //         //   },
//   //         // ],
//   //       });
//   //       // .then(function (reviews) {
//   //       //   if (reviews) {
//   //       //     res.status(200).json(reviews);
//   //       //   } else {
//   //       //     res.status(404).json({ error: 'no review found' });
//   //       //   }
//   //       // });
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   },
// };
