var express = require('express'),
app = express();

var app = express();

var logger = function(req, res, next) {
  console.log("Got request for: " + req.originalUrl);
  next(); // Passing the requst to the next handler in the stack.
};
app.use(logger);
app.use(express.static(__dirname + '/../'));

app.listen(8003);
console.log('Listening on port 8003...');
