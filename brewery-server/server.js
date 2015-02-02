var express = require('express');
var graph = require('./modules/graphs.js');
var app = express();

app.get('/server/start', function (req, res) {
  graph.startServer();
  res.send('OK - Server started');
});

app.get('/server/stop', function (req, res) {
  graph.stopServer();
  res.send('OK - Server stopped');
});

app.get('/server/reset', function (req, res) {
  graph.resetServer();
  res.send('OK - Server reset');
});

app.get('/server/status', function (req, res) {
  res.send(graph.serverStatus().toString());
});

app.get('/server/fulloutput', function (req, res) {
  res.send(graph.getFullOutput().toString());
});

app.get('/server/output', function(req, res) {
	res.send(graph.getLatestOutputValue().toString());
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);

});

