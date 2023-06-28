import playGame from '../index.js';
import getRandomNumberInRange from '../utils.js';

const progressionGameRules = 'What number is missing in the progression?';
const progressionLength = getRandomNumberInRange(11, 5);

const getQuestionForGameRound = (firstElement, step, unknownElementIndex) => {
  const progressionList = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const currentElement = firstElement + i * step;
    if (i === unknownElementIndex) {
      progressionList.push('..');
    } else {
      progressionList.push(currentElement);
    }
  }

  return progressionList.join(' ');
};

const getDataForProgressionGameRound = () => {
  const firstElement = getRandomNumberInRange(1001);
  const step = getRandomNumberInRange(101);
  const unknownElementIndex = getRandomNumberInRange(progressionLength);
  const question = getQuestionForGameRound(firstElement, step, unknownElementIndex);
  const answer = String(firstElement + unknownElementIndex * step);
  return [question, answer];
};

export default () => playGame(progressionGameRules, getDataForProgressionGameRound);
