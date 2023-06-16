import readlineSync from 'readline-sync';

const CORRECT_ANSWERS_TO_WIN = 3;

const sayGoodbyeToUser = (isWin, name) => {
  const finalText = (isWin) ? `Congratulations, ${name}!` : `Let's try agains, ${name}!`;
  console.log(finalText);
};

const playWithUser = (name, getQAForGame) => {
  let numberOfCorrectAnswers = 0;

  while (numberOfCorrectAnswers < CORRECT_ANSWERS_TO_WIN) {
    const [question, correctAnswer] = getQAForGame();
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

export default (gameGreeting, getQAForGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameGreeting);
  playWithUser(name, getQAForGame);
};
