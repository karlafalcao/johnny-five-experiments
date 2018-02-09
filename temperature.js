var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var temp = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  });

  temp.on("change", function() {
    console.log(this.kelvin + "°C");
  });
});
