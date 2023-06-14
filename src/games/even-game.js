export default () => {
  const question = Math.floor(Math.random() * 10000);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};
