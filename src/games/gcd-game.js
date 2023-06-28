import playGame from '../index.js';
import getRandomNumberInRange from '../utils.js';

const gcdGameRules = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b ? gcdGameRules(b, a % b) : a);

const getDataForGCDGameRound = () => {
  const a = getRandomNumberInRange(101, 1);
  const b = getRandomNumberInRange(101, 1);
  const question = `${a} ${b}`;
  const answer = String(getGCD(a, b));
  return [question, answer];
};

export default () => playGame(gcdGameRules, getDataForGCDGameRound);
