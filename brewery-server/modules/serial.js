var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function(callback) {
  sp.on("data", function (data) {
    console.log("here: "+data);
  });

  sp.on("open", function() {
    setInterval(function() {
      sp.write('GP');
    }, 3000);
  })

  sp.on("error", function() {
    console.log('error');
  });
}

exports.writeSerial = function(cmd) {
  console.log('write:');
  sp.write(cmd);
}
