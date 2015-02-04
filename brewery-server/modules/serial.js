var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function() {
  sp.on("data", function (data) {
    console.log("here: "+data);
  });
}

exports.writeSerial = function(cmd) {
  sp.write(cmd);
}
