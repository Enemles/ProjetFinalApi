const book = require('express').Router();
const books = require('../service/books');

const loginMiddleware = require('./login');

const apicache = require('apicache');
let cache = apicache.middleware;

book.get('/', (req, res) => {
  books
    .getBooks()
    .then((data) => {
      res.set('Cache-Control', `max-age=31536000, no-cache`);
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || 'Some error occurred while retrieving Books.',
      });
    });
});

book.get('/:id', cache('5 minutes'), async (req, res, next) => {
  const id = req.params.id;
  try {
    const getById = await books.getBookById(id);
    res.status(200).json(getById);
  } catch (err) {
    next(err);
  }
  // books
  //   .getBookById(id)
  //   .then((data) => {
  //     if (data) {
  //       res.json(data);
  //     } else {
  //       res.status(404).json({
  //         message: `Cannot find Book with id=${id}.`,
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).json({
  //       message: 'Error retrieving Book with id=' + id,
  //     });
  //   });
});

book.post('/', loginMiddleware, (req, res) => {
  const book = {
    id: req.body.id,
    title: req.body.title,
    date: req.body.date,
  };
  books
    .addBook(book)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

book.delete('/:id', (req, res) => {
  const id = req.params.id;
  books
    .deleteBookById(id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          message: `Cannot find Book with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: 'Error deleting Book with id=' + id,
      });
    });
});

module.exports = book;
