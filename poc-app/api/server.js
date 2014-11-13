// server.js

// call the packages we need
var express = require('express'); 		// call express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Phone = require('./models/phoneModel');

//Connect to MongoDB
mongoose.connect('mongodb://localhost/apitdb');

module.exports = function(app){
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // ROUTES FOR OUR API
  // =============================================================================
  var router = express.Router();        // get an instance of the express Router

  //Event Log
  router.use(function(req, res, next){
    console.log('HTTP Request recived.');
    next();
  });


  // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' }); 
  });

  // API ROUTES:

  router.route('/phone')
  
    .post(function(req, res){
      var phone = new Phone(req.body);
      if (phone.snippet) {
        var splited = phone.snippet.split(" ");
        phone.keywords = splited;
      }

      //Save phone
      phone.save(function(err){
        if (err)
          res.send(err);
        res.json({message: 'Phone Created'});
      });
    })

    .get(function(req, res){
      var filter = {};
      var keywords = req.param('keywords');
      if (keywords) {
        var splitted = keywords.split(" ");
        filter = {"keywords":{"$all":splitted}};
      }
      Phone.find(filter,function(err, phones){
        if (err)
          res.send(err);

        res.json(phones);
      });
    });

  // REGISTER OUR ROUTES -------------------------------
  // all of our routes will be prefixed with /api
  app.use('/api', router);
}