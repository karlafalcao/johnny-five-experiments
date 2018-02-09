var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Johnny-Five provides pre-packages shield configurations!
  // http://johnny-five.io/api/motor/#pre-packaged-shield-configs
  var motors = new five.Motors([
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1,
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2,
  ]);

  motors.speed(255);

  this.wait(3000, function() {
    motors.stop();
  });
});
