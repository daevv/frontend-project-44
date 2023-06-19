import playGame from '../index.js';
import getRandomNumberBelowValue from '../utils.js';

const evenGameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQAForEvenGame = () => {
  const question = getRandomNumberBelowValue(101);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(evenGameGreeting, getQAForEvenGame);
