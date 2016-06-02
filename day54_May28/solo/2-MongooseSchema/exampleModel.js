var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true, // remove whitespace before and after
    required: "String is Required"
  },
  number: {
    type: Number,
    unique: true,
    required: true
  },
  email: {
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"], //regex email match parameter. must include an at sign and a period.
  },
  boolean: Boolean,
  array: Array,
  date: {
    type: Date,
    default: Date.now
  },
  longstring: {
    type: String,
    validate: [
      //Function takes in the value as an argument
      function(input) {
        //If this returns true, proceed. If not, return an error message.
        return input.length >= 6;
      },
      //Error Message
      'Longstring should be longer.'
    ]
  }

});

//export and make available.
var Example = mongoose.model('Example', ExampleSchema); //connects mongoose schema to a table. Table "Examples" is created if it doesn't exist.
module.exports = Example;
