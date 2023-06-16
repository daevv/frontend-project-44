import playGame from '../index.js';

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
      return a + b;
  }
};

const getQAForCalcGame = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  const question = `${a} ${sign} ${b}`;
  const answer = String(calculateValue(a, b, sign));
  return [question, answer];
};

export default () => playGame(calcGameGreeting, getQAForCalcGame);
