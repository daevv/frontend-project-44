import readlineSync from 'readline-sync';

export default (gameGreeting, getQAForGame) => {
  const correctAnswersToWin = 3;
  let numberOfCorrectAnswers = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameGreeting);

  while (numberOfCorrectAnswers < correctAnswersToWin) {
    const [question, correctAnswer] = getQAForGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(userAnswer) === correctAnswer) {
      console.log('Correct!');
      numberOfCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
