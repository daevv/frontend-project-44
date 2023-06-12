import readlineSync from 'readline-sync';
// const readlineSync = require('readline-sync')

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
