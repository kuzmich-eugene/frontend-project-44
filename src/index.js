import getUserAnswer from './cli.js';

export const ROUNDS_COUNT = 3;

export const getAnswerFromUser = (message) => getUserAnswer(message);

export const askAndGetAnswer = (question) => {
  console.log(`Question: ${question}`);
  const userAnswer = getAnswerFromUser('Your answer:');

  return userAnswer;
};

export const showMessageAfterUserAnswer = (condition, userAnswer, rightAnswer, userName) => {
  if (condition) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getAnswerFromUser('May I have your name?');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const successFinish = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const getRandomNumber = (multiplyNumber) => Math.ceil(Math.random() * multiplyNumber);
