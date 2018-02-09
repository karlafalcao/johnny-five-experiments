var Barcli = require("barcli");
var five = require("johnny-five");
var board = new five.Board({
  debug: false, repl: false
});

board.on("ready", function() {
  var range = [0, 150];
  var graph = new Barcli({
    label: "Potentiometer",
    range: range,
  });
  var led = new five.Led(11);
  var rotary = new five.Sensor("A0");

  rotary.on("change", function() {
    console.log("Sensor changed!", this.value);
    graph.update(this.value);
    led.brightness(this.value >> 2);
  });
});
