var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
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
  sp.write('GP', function(err, res) {
    console.log(res);
    callback(res);
  });
}
