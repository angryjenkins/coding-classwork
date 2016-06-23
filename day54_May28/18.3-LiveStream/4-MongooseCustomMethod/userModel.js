var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      'Password should be longer.'
    ]
  },
  email: {
    type: String,
    unique:true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now
  },
  isCool: Boolean
});

UserSchema.methods.coolifier = function(){
  this.username = this.username + '...the Coolest!';
  return this.username;
};

UserSchema.methods.makeCool = function(){
  this.isCool = true;
  return this.isCool;
};

var User = mongoose.model('User', UserSchema);
module.exports = User;
