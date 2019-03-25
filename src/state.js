const MAP_MIN = 0;
const MAP_MAX = 100;
const DIRECTIONS = ["North", "East", "South", "West"];

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomCoordinates = () => ({
  x: getRandom(MAP_MIN, MAP_MAX),
  y: getRandom(MAP_MIN, MAP_MAX)
});

const getRandomDirection = () => DIRECTIONS[getRandom(0, DIRECTIONS.length)];

const mod = (x, n) => ((x % n) + n) % n;

export const isWinCondition = ({ kenobi, position }) =>
  kenobi.x === position.x && kenobi.y === position.y;

export const isValidPosition = pos => pos >= MAP_MIN && pos < MAP_MAX;

export const getDirectionAtOffset = (currentDirection, offset) => {
  const newDirIndex = mod(
    DIRECTIONS.findIndex(direction => currentDirection === direction) + offset,
    DIRECTIONS.length
  );
  return DIRECTIONS[newDirIndex];
};

export const initState = () => ({
  direction: getRandomDirection(),
  hasLanded: false,
  position: getRandomCoordinates(),
  kenobi: getRandomCoordinates()
});
