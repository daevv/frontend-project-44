import playGame from '../index.js';
import getRandomNumberBelowValue from '../utils.js';

const primeGameGreeting = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  for (let i = 2; i < Math.floor(Math.sqrt(a)); i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return a > 2;
};

const getQAForPrimeGame = () => {
  const question = getRandomNumberBelowValue(1001);
  const answer = (isPrime(question)) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(primeGameGreeting, getQAForPrimeGame);
