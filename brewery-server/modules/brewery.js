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
	return outputGraph[outputGraph.length - 1];
}

exports.getFullOutput = function() {
	return outputGraph;
}

function startServer() {
	if(!serverRunning) {
		serverRunning = true;

		setInterval(function() {
			addValueToOutput();
			// read temp on comp
			// add temp to array

			serverTime++ % graphLength;
		}, freq);
	}
}

function addValueToOutput() {
	outputGraph.push(serverTime);
}

function resetServer() {
	serverTime = 0;
	inputGraph = [];
	outputGraph = [];
}