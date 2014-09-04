var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pin = 123456;

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/pin', function(req, res) {
    if (req.body.pin === pin) {
        res.send({ valid: true });
    } else {
        res.send({ valid: false });
    }
});

var port = Number(process.env.PORT || 1212);

app.listen(port, function () {
    console.log("Listening on " + port);
});