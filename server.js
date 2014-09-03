var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/bower_components'));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
});

var port = Number(process.env.PORT || 1212);

app.listen(port, function() {
  console.log("Listening on " + port);
});