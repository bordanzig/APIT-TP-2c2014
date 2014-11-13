//api/models/userModel.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  brand: String,
  model: String,
  price: Number,
  d:{
    wifi: Boolean,
    bluetooth: Boolean,
    micro: String,
    ram : String,
    camera: {
      definition: Number,
      flash: Boolean,
    },
    gps: Boolean,
    so: String,
    keywords: [String]
  }
});

module.exports = mongoose.model('Phone', PhoneSchema, 'apit_phones');




  
