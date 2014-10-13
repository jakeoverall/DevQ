var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pin = '';

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/bower_components'));
app.use(bodyParser());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/pin', function(req, res) {
    if (req.body.pin === pin) {
        console.log('true');
        res.send({ valid: true });
    } else {
        console.log('true');
        res.send({ valid: false });
    }
});

var port = Number(process.env.PORT || 8888);

app.listen(port, function () {
    console.log("Listening on " + port);
});