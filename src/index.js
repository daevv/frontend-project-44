import readlineSync from 'readline-sync';

import GameType from './const.js';
import getQAForCalcGame from './games/calc-game.js';
import getQAForEvenGame from './games/even-game.js';
import getQAForGCDGame from './games/gcd-game.js';
import getQAForProgressionGame from './games/progression-game.js';

const CORRECT_ANSWERS_TO_WIN = 3;

const GameGreeting = {
  [GameType.EVEN_GAME]: 'Answer "yes" if the number is even, otherwise answer "no".',
  [GameType.CALC_GAME]: 'What is the result of the expression?',
  [GameType.GCD_GAME]: 'Find the greatest common divisor of given numbers.',
  [GameType.PROGRESSION_GAME]: 'What number is missing in the progression?',
};

const GameQuestion = {
  [GameType.EVEN_GAME]: getQAForEvenGame,
  [GameType.CALC_GAME]: getQAForCalcGame,
  [GameType.GCD_GAME]: getQAForGCDGame,
  [GameType.PROGRESSION_GAME]: getQAForProgressionGame,
};

const sayGoodbyeToUser = (isWin, name) => {
  const finalText = (isWin) ? `Congratulations, ${name}!` : `Let's try agains, ${name}!`;
  console.log(finalText);
};

const playWithUser = (name, gameType) => {
  let numberOfCorrectAnswers = 0;

  while (numberOfCorrectAnswers < CORRECT_ANSWERS_TO_WIN) {
    const [question, correctAnswer] = GameQuestion[gameType]();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  sayGoodbyeToUser(numberOfCorrectAnswers === CORRECT_ANSWERS_TO_WIN, name);
};

export default (gameType) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(GameGreeting[gameType]);
  playWithUser(name, gameType);
};
