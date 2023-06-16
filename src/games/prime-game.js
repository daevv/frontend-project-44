import playGame from '../index.js';

const primeGameGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQAForPrimeGame = () => {
  const question = Math.floor(Math.random() * 1001);
  let answer = 'yes';

  if (question < 2) {
    answer = 'no';
  } else {
    for (let i = 2; i < Math.floor(Math.sqrt(question)); i += 1) {
      if (question % i === 0) {
        answer = 'no';
        break;
      }
    }
  }
  return [question, answer];
};

export default () => playGame(primeGameGreeting, getQAForPrimeGame);
