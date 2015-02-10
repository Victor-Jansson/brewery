var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false,
  parser: serialport.parsers.readline('\r\n') 
});

var expectValue = false;
var latestValue = {
  "GT 0": null,
  "GT 1": null
};
var lastCommand = "";


var command = [];

function saveTemperature(temp) {
  console.log(temp);
}


exports.initSerialPort = function(callback) {

  sp.on("open", function() {
    callback();
  });

  sp.on("error", function() {
    console.log('error');
  });

  sp.on("data", function(res) {
    console.log('data' ,res);
    switch(res) {
      case "GT 0": expectValue = true;
        lastCommand = "GT 0";
        latestValue["GT 0"] = res;
        break;
      case "GT 1": expectValue = true;
        lastCommand = "GT 1";
        latestValue["GT 1"] = res;
        break;
      default: if (expectValue) {
        latestValue[lastCommand] = res;
      }
      expectValue = false;
      break;
    }
  });
}

exports.readTemp0 = function(callback) {
  sp.write('GT 0\n', function() {
    callback(latestValue['GT 0']);
  });
}

exports.readTemp1 = function(callback) {
  sp.write('GT 1\n', function() {
    callback(latestValue['GT 1']);
  });
}

