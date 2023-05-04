import {
  greeting, ROUNDS_COUNT, askAndGetAnswer, showMessageAfterUserAnswer, successFinish,
  getRandomNumber,
} from '../index.js';

const greatestCommonDivisor = (firstNum, secondNum) => {
  let num1 = firstNum;
  let num2 = secondNum;
  let result = 1;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
    result = num1;
  }

  return result;
};

export const brainGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;
  while (counter < ROUNDS_COUNT) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const userAnswer = askAndGetAnswer(`${firstNumber} ${secondNumber}`);
    const rightAnswer = greatestCommonDivisor(firstNumber, secondNumber);
    showMessageAfterUserAnswer(
      rightAnswer === Number(userAnswer),
      userAnswer,
      rightAnswer,
      userName,
    );

    if (!(rightAnswer === Number(userAnswer))) {
      break;
    }

    counter += 1;
  }

  if (counter === 3) {
    successFinish(userName);
  }
};

export default brainGcd;
