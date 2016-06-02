var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LibrarySchema = new Schema({
  name: {
    type:String,
    unique:true
  },
  books: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
  }]
});

var Library = mongoose.model('Library', LibrarySchema);
module.exports = Library;
