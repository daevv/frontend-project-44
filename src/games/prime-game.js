import playGame from '../index.js';
import getRandomNumberInRange from '../utils.js';

const primeGameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (a) => {
  for (let i = 2; i <= Math.sqrt(a); i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return a > 2;
};

const getDataForPrimeGameRound = () => {
  const question = getRandomNumberInRange(1001);
  const answer = (isPrime(question)) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(primeGameRules, getDataForPrimeGameRound);
