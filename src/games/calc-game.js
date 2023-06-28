import playGame from '../index.js';
import getRandomNumberInRange from '../utils.js';

const calcGameRules = 'What is the result of the expression?';

const calculateValue = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

const getDataForCalcGameRound = () => {
  const a = getRandomNumberInRange(101);
  const b = getRandomNumberInRange(101);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumberInRange(signs.length)];
  const question = `${a} ${sign} ${b}`;
  const answer = String(calculateValue(a, b, sign));
  return [question, answer];
};

export default () => playGame(calcGameRules, getDataForCalcGameRound);
