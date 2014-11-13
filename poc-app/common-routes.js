var express = require('express');

module.exports = function(app){
  app.get('/', function(req, res) {
    res.redirect('/frontend/');
  });
  app.use('/bootstrap', express.static( __dirname + '/node_modules/bootstrap'));
  app.use('/angular', express.static( __dirname + '/node_modules/angular'));
  app.use('/angular-route', express.static( __dirname + '/node_modules/angular-route'));
  app.use('/angular-resource', express.static( __dirname + '/node_modules/angular-resource'));
}