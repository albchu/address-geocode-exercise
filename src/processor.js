import { isValidPosition, getDirectionAtOffset, isWinCondition } from "./state";

export const processLandCmd = gameState => {
  gameState.hasLanded = true;
  processReportCmd(gameState);
};

export const processMoveCmd = (
  { direction, position, hasLanded },
  moveUnits = 0
) => {
  if (hasLanded) {
    let newPosition;
    const moveNum = parseInt(moveUnits);
    switch (direction) {
      case "North":
        newPosition = position.y + moveNum;
        if (isValidPosition(newPosition)) {
          position.y = newPosition;
        }
        break;
      case "South":
        newPosition = position.y - moveNum;
        if (isValidPosition(newPosition)) {
          position.y = newPosition;
        }
        break;
      case "East":
        newPosition = position.x + moveNum;
        if (isValidPosition(newPosition)) {
          position.x = newPosition;
        }
        break;
      case "West":
        newPosition = position.x - moveNum;
        if (isValidPosition(newPosition)) {
          position.x = newPosition;
        }
        break;
    }
  } else
    console.log("R2-D2 tries to move before landing. It's not very effective.");
};

export const processLeftCmd = gameState => {
  gameState.direction = getDirectionAtOffset(gameState.direction, -1);
};

export const processRightCmd = gameState => {
  gameState.direction = getDirectionAtOffset(gameState.direction, 1);
};
export const processReportCmd = ({
  position,
  direction,
  kenobi,
  hasLanded
}) => {
  const r2Report = hasLanded
    ? `R2-D2 is at ${position.x},${position.y} facing ${direction}`
    : "R2-D2 has not landed yet";

  console.log(r2Report);
  console.log(`Obi Wan Kenobi is at ${kenobi.x},${kenobi.y}`);
};

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
  if (isWinCondition(gameState)) {
    console.log("Congratulations, you've saved the Rebellion!");
    process.exit();
  }
  console.log();
};
