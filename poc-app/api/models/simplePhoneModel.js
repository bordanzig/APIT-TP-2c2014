//api/models/userModel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  age: Number, 
  id: String, 
  imageUrl: String, 
  name: String, 
  snippet: String 
});

module.exports = mongoose.model('Phone', PhoneSchema, 'apit_phones');