var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  author: {
    type:String
  },
  title: {
    type:String
  }
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;
