const Book = require("..models/book");

exports.getBooks = function getBooks() {
  return Book.findAll();
};

exports.getBookById = function getBookById(id) {
  return Book.findByPk(id);
};

exports.addBook = function addBook(book) {
  return Book.create(book);
};

exports.deleteBookById = function deleteBookById(id) {
  return Book.destroy({
    where: { id: id },
  });
};
