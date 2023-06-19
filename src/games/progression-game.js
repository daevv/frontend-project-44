import playGame from '../index.js';
import getRandomNumberBelowValue from '../utils.js';

const progressionGameGreeting = 'What number is missing in the progression?';

const getProgressionWithEmptySlot = (firstElement, d, length, unknownElementIndex) => {
  const progressionList = [];

  for (let i = 1; i <= length; i += 1) {
    const currentElement = firstElement + (i - 1) * d;
    if (i === unknownElementIndex) {
      progressionList.push('..');
    } else {
      progressionList.push(currentElement);
    }
  }

  return progressionList;
};

const getQAForPregressionGame = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const firstProgressionElement = getRandomNumberBelowValue(1001);
  const d = getRandomNumberBelowValue(101);
  const unknownElementIndex = getRandomNumberBelowValue(progressionLength) + 1;
  const answer = String(firstProgressionElement + (unknownElementIndex - 1) * d);
  const question = getProgressionWithEmptySlot(firstProgressionElement, d, progressionLength, unknownElementIndex).join(' ');

  return [question, answer];
};

export default () => playGame(progressionGameGreeting, getQAForPregressionGame);
