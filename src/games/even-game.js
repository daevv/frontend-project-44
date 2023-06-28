import playGame from '../index.js';
import getRandomNumberInRange from '../utils.js';

const evenGameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getDataForEvenGameRound = () => {
  const question = getRandomNumberInRange(101);
  const answer = (isEven(question)) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(evenGameRules, getDataForEvenGameRound);
