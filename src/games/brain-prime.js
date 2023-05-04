import {
  greeting, ROUNDS_COUNT, askAndGetAnswer, showMessageAfterUserAnswer, successFinish,
  getRandomNumber,
} from '../index.js';

const isPrime = (number) => {
  for (let i = 2, j = Math.sqrt(number); i <= j; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return number > 1 ? 'yes' : 'no';
};

const brainPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let counter = 0;
  while (counter < ROUNDS_COUNT) {
    const number = getRandomNumber(100);
    const userAnswer = askAndGetAnswer(`${number}`);
    const rightAnswer = isPrime(number);
    showMessageAfterUserAnswer(
      rightAnswer === userAnswer,
      userAnswer,
      rightAnswer,
      userName,
    );

    if (!(rightAnswer === userAnswer)) {
      break;
    }

    counter += 1;
  }

  if (counter === 3) {
    successFinish(userName);
  }
};

export default brainPrime;
