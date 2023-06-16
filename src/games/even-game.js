import playGame from '../index.js';

const evenGameGreeting = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQAForEvenGame = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

export default () => playGame(evenGameGreeting, getQAForEvenGame);
