const getRandomNumberInRange = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNumberInRange;
