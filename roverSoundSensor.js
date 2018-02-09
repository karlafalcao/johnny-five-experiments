var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var mic = new five.Sensor("A0");
  // Johnny-Five provides pre-packages shield configurations!
  // http://johnny-five.io/api/motor/#pre-packaged-shield-configs
  var motors = new five.Motors([
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M1,
    five.Motor.SHIELD_CONFIGS.POLOLU_DRV8835_SHIELD.M2,
  ]);

  this.repl.inject({
    motors: motors
  });

  var running = 1; 
  var dir = 1;

  mic.on("data", function(sound) {
    // console.log(this.value );

    if ( this.value > 200 ) {
      // motors.stop();
      // running = 0;
       motors[0].speed(50).rev();
      // motors[1].speed(50).rev();
      
      setTimeout(function(){
        motors[0].speed(50).fwd();
        running = 1;
      }, 1000);
    }
    //  else if( this.value < 100 && running === 0 ){
    //   motors[0].speed(50).rev();
    //   // motors[1].speed(50).rev();
      
    //   setTimeout(function(){
    //     motors[0].speed(50).fwd();
    //     running = 1;
    //   }, 1000);
    //   // if (dir === 1) {
    //   //   motors[0].speed(50).fwd();
    //   //   motors[0].speed(50).fwd();
        

    //   //   dir = -1;
    //   // } else else{
    //   //   motors.speed(50).rev();
    //   //   dir = 1;
    //   // }
    // }

  });

});
