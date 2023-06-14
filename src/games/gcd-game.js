export default () => {
  let a = Math.floor(Math.random() * 100);
  let b = Math.floor(Math.random() * 100);
  const question = `${a} ${b}`;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  const answer = String(a);
  return [question, answer];
};
