var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600,
  parser: serialport.parsers.raw
});

exports.initSerialPort = function(callback) {

  sp.on("open", function() {
    callback();
  })

  sp.on("error", function() {
    console.log('error');
  });
}

exports.readSerial = function(callback) {
  sp.write('GT 0\r', function(res) {
    console.log(res);
    callback(res);
  });
}
