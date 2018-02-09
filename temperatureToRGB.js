var ct = require('color-temperature');
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var temp = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  });

  var rgb = new five.Led.RGB({
    pins: [3, 5, 6],
    isAnode: true
  });

  temp.on("change", function() {
    //this.kelvin

    var rgbObj = ct.colorTemperature2rgb(1850);
    // Write an algorithm that converts temperature (F, K or C)
    // into an RGB hex value.
    var hex = rgbObj.red.toString(16)+rgbObj.green.toString(16)+rgbObj.blue.toString(16); 
    rgb.color(hex);
    console.log(hex);
  });
});
