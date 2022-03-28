import { Pulser } from "./pulser.mjs";

//Instantiate a Pulser object
const pulser = new Pulser();

pulser.on("pulse", () => {
  console.log(`${new Date().toISOString()} pulse received`);
});

pulser.start();
