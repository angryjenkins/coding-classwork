var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  //Code goes in here
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
