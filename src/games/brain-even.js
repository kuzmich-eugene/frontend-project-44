import {
  greeting, ROUNDS_COUNT, askAndGetAnswer, showMessageAfterUserAnswer, successFinish,
} from '../index.js';

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < ROUNDS_COUNT) {
    const numberForShowing = Math.ceil(Math.random() * 100);
    const userAnswer = askAndGetAnswer(numberForShowing);
    const condition = (numberForShowing % 2 === 0 && userAnswer === 'yes') || (numberForShowing % 2 !== 0 && userAnswer === 'no');
    showMessageAfterUserAnswer(condition, userAnswer, numberForShowing % 2 === 0 ? 'yes' : 'no', userName);
    if (!condition) {
      break;
    }
    counter += 1;
  }

  if (counter === 3) {
    successFinish(userName);
  }
};

export default brainEven;
