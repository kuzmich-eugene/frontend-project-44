import {
  greeting, ROUNDS_COUNT, askAndGetAnswer, showMessageAfterUserAnswer, successFinish,
  getRandomNumber,
} from '../index.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      console.log('Something went wrong!');
      return null;
  }
};

const getArithmeticOperator = (randomNumber) => {
  let sign = '';

  if (randomNumber === 0) {
    sign = '+';
  } else if (randomNumber === 1) {
    sign = '-';
  } else {
    sign = '*';
  }

  return sign;
};

const brainCalc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');

  let counter = 0;
  while (counter < ROUNDS_COUNT) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const arithmeticOperator = getArithmeticOperator(getRandomNumber(3));
    const userAnswer = askAndGetAnswer(`${firstNumber} ${arithmeticOperator} ${secondNumber}`);
    const rightAnswer = calculate(firstNumber, secondNumber, arithmeticOperator);
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

export default brainCalc;
