var Cylon = require('cylon');

Cylon.robot({
  name: 'spark',
  connection: {
    name: 'spark',
    adaptor: 'spark',
    accessToken: 'ACCESS_TOKEN',
    deviceId: 'DEVICE_ID'
  },

  device: {
    name: 'led',
    driver: 'led',
    pin: 'D7'
  },

  work: function(my) {
  }
}).start();

var toggleButton = document.getElementById('toggle');
toggleButton.addEventListener ("click", function() {
  var robot = Cylon.robots['spark'];
  robot.devices.led.toggle();
});
