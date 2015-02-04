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
  sp.write('GT 0', function(res) {
    console.log(typeof(res));
    console.log(Number(res));
    console.log(res);
    console.log(parseFloat(res));
    callback(res);
  });
}
