var serial = require("./serial.js");

var serverRunning = false;
var freq = 1000 // frequency in ms
var serverTime = 0;
var inputGraph = [];
var outputGraph = [];
var graphLength = 50;

exports.startServer = function() {
  startServer();
}

exports.stopServer = function() {
  serverRunning = false;
}

exports.resetServer = function() {
  resetServer();
}

exports.serverStatus = function() {
  return serverRunning;
}

exports.getLatestOutputValue = function() {
  return {
    outputValue: outputGraph[outputGraph.length - 1],
    inputValue: inputGraph[inputGraph.length - 1]
  }
}

exports.getFullOutput = function() {
  return outputGraph;
}

function startServer() {
  if(!serverRunning) {
    serverRunning = true;

    setInterval(function() {
      addValueToOutput();
      addValueToInput();
      serverTime++;

      if (serverTime > graphLength) {
        resetServer();
      }
    }, freq);
  }
}

function addValueToOutput() {
  serial.readTemp0(function(data) {
    outputGraph.push(data);
  });
}

function addValueToInput() {
  serial.readTemp1(function(data) {
    inputGraph.push(data);
  });
}

function resetServer() {
  serverTime = 0;
  inputGraph = [];
  outputGraph = [];
}
