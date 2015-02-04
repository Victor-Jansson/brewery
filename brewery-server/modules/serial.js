var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function() {
  serialPort.on("data", function (data) {
    sys.puts("here: "+data);
  });
}
