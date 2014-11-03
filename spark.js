var Cylon = require('cylon');

Cylon.robot({
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
    every((1).second(), my.led.toggle);
  }
}).start();
