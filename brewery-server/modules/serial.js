var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function(callback) {

  sp.on("open", function() {
    sp.write('GP', function(err, res) {
      console.log(res);
    });
  })

  sp.on("error", function() {
    console.log('error');
  });
}
