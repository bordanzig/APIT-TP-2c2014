var express = require('express');
var app = express();

require('./common-routes')(app);
require('./frontend/index.js')(app);
require('./contentmngr/index.js')(app);
require('./api/server.js')(app);

var server = app.listen(3002, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
