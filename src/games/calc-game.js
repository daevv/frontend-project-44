// eslint-disable-next-line import/no-extraneous-dependencies
import { evaluate } from 'mathjs';

export default () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const signs = ['+', '-', '*'];
  const sign = signs[Math.floor(Math.random() * signs.length)];
  const question = `${a} ${sign} ${b}`;
  const answer = String(evaluate(question));
  return [question, answer];
};
