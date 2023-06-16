import playGame from '../index.js';

const GCDGameGreeting = 'Find the greatest common divisor of given numbers.';

const getQAForGCDGame = () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  const question = `${a} ${b}`;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  const answer = String(a);
  return [question, answer];
};

export default () => playGame(GCDGameGreeting, getQAForGCDGame);
