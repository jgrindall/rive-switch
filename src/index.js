import "./styles.css";

const { Rive } = require("@rive-app/canvas");

const canvasEl = document.getElementById("canvas");
new Rive({
  src: "switch_event_example.riv",
  canvas: canvasEl,
  autoplay: true,
  stateMachines: "Main State Machine"
});
