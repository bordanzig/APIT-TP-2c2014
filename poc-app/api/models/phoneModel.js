//api/models/userModel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  name: String,
  snippet: String,
  keywords: [String]
}, {strict: false});

module.exports = mongoose.model('Phone', PhoneSchema, 'apit_phones');




  
