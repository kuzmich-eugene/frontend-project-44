#!/usr/bin/env node

import { greeting, getUserAnswer, welcome } from '../index.js';

welcome();
const userName = getUserAnswer('May I have your name?');
greeting(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3) {
  const numberForShowing = Math.ceil(Math.random() * 100);
  const userAnswer = getUserAnswer(`Question: ${numberForShowing}`);
  console.log(`Your answer: ${userAnswer}`);
  const condition = (numberForShowing % 2 === 0 && userAnswer === 'yes') || (numberForShowing % 2 !== 0 && userAnswer === 'no');

  if (condition) {
    console.log('Correct!');
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${userAnswer === 'yes' ? 'no' : 'yes'}.`);
    console.log(`Let's try again, ${userName}!`);

    break;
  }
  counter += 1;
}

if (counter === 3) {
  console.log(`Congratulations, ${userName}!`);
}
