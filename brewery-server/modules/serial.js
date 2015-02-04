var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function(callback) {
  sp.on("data", function (data) {
    console.log("here: "+data);
  });

  callback();
}

exports.writeSerial = function(cmd) {
  sp.write(cmd);
}
