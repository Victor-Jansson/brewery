var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

exports.initSerialPort() {
  serialPort.on("data", function (data) {
    sys.puts("here: "+data);
  });
}
