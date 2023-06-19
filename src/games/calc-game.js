import playGame from '../index.js';
import getRandomNumberBelowValue from '../utils.js';

const calcGameGreeting = 'What is the result of the expression?';

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

const getQAForCalcGame = () => {
  const a = getRandomNumberBelowValue(101);
  const b = getRandomNumberBelowValue(101);
  const signs = ['+', '-', '*'];
  const sign = signs[getRandomNumberBelowValue(signs.length)];
  const question = `${a} ${sign} ${b}`;
  const answer = String(calculateValue(a, b, sign));
  return [question, answer];
};

export default () => playGame(calcGameGreeting, getQAForCalcGame);
