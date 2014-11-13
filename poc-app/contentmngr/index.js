var express = require('express');

module.exports = function(app){
  app.use('/contentmngr/', express.static(__dirname + '/static'));
}