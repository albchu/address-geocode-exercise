export const initState = () => ({
  direction: "NORTH",
  position: getRandomCoordinates(),
  kenobi: getRandomCoordinates()
});

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

const getRandomCoordinates = () => ({
  x: getRandom(0, 100),
  y: getRandom(0, 100)
});
