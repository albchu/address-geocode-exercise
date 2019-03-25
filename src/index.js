import readline from "readline";

const processLandCmd = () => console.log("Ya landed");
const processMoveCmd = () => console.log("Move plz!");
const processLeftCmd = () => console.log("Turn left");
const processRightCmd = () => console.log("Turn right");
const processReportCmd = () => console.log("Report!");

const processCommand = line => {
  if (line.length === 0) return; // No input, no problem
  // First token is the command
  const tokenized = line.split(" ");
  const command = tokenized[0];
  switch (command) {
    case "LAND":
      processLandCmd();
      break;
    case "MOVE":
      processMoveCmd();
      break;
    case "LEFT":
      processLeftCmd();
      break;
    case "RIGHT":
      processRightCmd();
      break;
    case "REPORT":
      processReportCmd();
      break;
  }
};

const main = async () => {
  console.log("R2D2's Adventure!");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", processCommand);
};

main();
