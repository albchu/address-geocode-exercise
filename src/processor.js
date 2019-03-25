const print = line => console.log(`${line}\n`);

export const processLandCmd = () => print("Ya landed");
export const processMoveCmd = (gameState, moveUnits = 0) => {
  print("Move plz!", moveUnits);
  gameState.move = moveUnits;
};
export const processLeftCmd = () => print("Turn left");
export const processRightCmd = () => print("Turn right");

export const processReportCmd = ({ position, direction, kenobi }) =>
  print(
    `R2D2 is at ${position.x},${
      position.y
    } facing ${direction}\nObi Wan Kenobi is at ${kenobi.x},${kenobi.y}`
  );

export const processCommand = gameState => line => {
  if (line.length === 0) return; // No input, no problem
  const tokenized = line.split(" ");
  const command = tokenized[0];
  switch (command) {
    case "LAND":
      processLandCmd(gameState);
      break;
    case "MOVE":
      processMoveCmd(gameState, tokenized[1]);
      break;
    case "LEFT":
      processLeftCmd(gameState);
      break;
    case "RIGHT":
      processRightCmd(gameState);
      break;
    case "REPORT":
      processReportCmd(gameState);
      break;
  }
};
