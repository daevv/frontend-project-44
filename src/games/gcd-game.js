import playGame from '../index.js';
import getRandomNumberBelowValue from '../utils.js';

const GCDGameGreeting = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let copyOfA = a;
  let copyOfB = b;

  while (copyOfB !== 0) {
    const temp = copyOfB;
    copyOfB = copyOfA % copyOfB;
    copyOfA = temp;
  }
  return copyOfA;
};

const getQAForGCDGame = () => {
  const a = getRandomNumberBelowValue(100) + 1;
  const b = getRandomNumberBelowValue(100) + 1;
  const question = `${a} ${b}`;
  const answer = String(getGCD(a, b));
  return [question, answer];
};

export default () => playGame(GCDGameGreeting, getQAForGCDGame);
