import readline from "readline";
import { processCommand } from "./processor";
import { initState } from "./state";

const main = async () => {
  console.log("R2D2's Adventure!\n\n");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const gameState = initState();

  rl.on("line", processCommand(gameState));
};

main();
