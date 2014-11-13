var express = require('express');

module.exports = function(app){
  app.use('/frontend/', express.static(__dirname + '/static'));
}