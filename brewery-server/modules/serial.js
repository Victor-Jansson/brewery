var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var sp = new SerialPort("/dev/ttyUSB0", {
  baudrate: 9600
});

exports.initSerialPort = function(callback) {
  sp.on("data", function (data) {
    console.log("Read: "+data);
  });

  sp.on("open", function() {
    setInterval(writeSerial('GP');
    }, 3000);
  })

  sp.on("error", function() {
    console.log('error');
  });
}

function writeSerial(cmd) {
  sp.write(cmd);
}
