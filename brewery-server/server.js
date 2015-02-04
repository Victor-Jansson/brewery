var express = require('express');
var cors = require('cors');
var brewery = require('./modules/brewery.js');
var serial = require('./modules/serial.js');
var app = express();

app.use(cors());

app.get('/server/start', function (req, res) {
  brewery.startServer();
  res.send('OK - Server started');
});

app.get('/server/stop', function (req, res) {
  brewery.stopServer();
  res.send('OK - Server stopped');
});

app.get('/server/reset', function (req, res) {
  brewery.resetServer();
  res.send('OK - Server reset');
});

app.get('/server/status', function (req, res) {
  res.send(brewery.serverStatus().toString());
});

app.get('/server/fulloutput', function (req, res) {
  res.send(brewery.getFullOutput().toString());
});

app.get('/server/output', function(req, res) {
	res.send(brewery.getLatestOutputValue());
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  brewery.startServer();

  serial.initSerialPort();

  console.log('Brewery server listening at http://%s:%s', host, port);

});
