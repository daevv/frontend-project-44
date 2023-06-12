import readlineSync from 'readline-sync';

const CORRECT_ANSWERS_TO_WIN = 3;
const ANSWER_TYPE = {
  yes: 0,
  no: 1,
};

export default () => {
  let numberOfCorrectAnswers = 0;
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (numberOfCorrectAnswers < CORRECT_ANSWERS_TO_WIN) {
    const number = Math.floor(Math.random() * 10000);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (ANSWER_TYPE[answer] === undefined || ANSWER_TYPE[answer] !== number % 2) {
      const correctAnswer = Object.keys(ANSWER_TYPE).find((key) => ANSWER_TYPE[key] === number % 2);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }

    console.log('Correct!');
    numberOfCorrectAnswers += 1;
  }

  if (numberOfCorrectAnswers === CORRECT_ANSWERS_TO_WIN) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};
