var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(11);
  var button = new five.Button(2);

  button.on("press", function() {
    console.log("Button Pressed!");
    led.on();
  });

  button.on("release", function() {
    console.log("Button Released!");
    led.off();
  });
  
  button.on("hold", function() {
    console.log("Button Held!");
    led.stop().off();
  });
});
