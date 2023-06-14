export default () => {
  let answer;
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const firstProgressionElement = Math.floor(Math.random() * 1000);
  const d = Math.floor(Math.random() * 100) + 1;
  const unknownElementIndex = Math.floor(Math.random() * (progressionLength) + 1);
  const progressionList = [];

  for (let i = 1; i <= progressionLength; i += 1) {
    const currentElement = firstProgressionElement + (i - 1) * d;
    if (i === unknownElementIndex) {
      progressionList.push('..');
      answer = String(currentElement);
    } else {
      progressionList.push(currentElement);
    }
  }

  return [progressionList.join(' '), answer];
};
