import {
  greeting, ROUNDS_COUNT, askAndGetAnswer, showMessageAfterUserAnswer, successFinish,
  getRandomNumber,
} from '../index.js';

const prepareProgression = (firstElement, step) => {
  const progression = [firstElement];
  while (progression.length < 10) {
    progression.push(progression[progression.length - 1] + step);
  }

  return progression;
};

const prepareQuestionMessage = (progression, hideElement) => {
  const newProgression = [...progression];
  newProgression.splice(hideElement, 1, '..');

  return newProgression.join(' ');
};

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');

  let counter = 0;
  while (counter < ROUNDS_COUNT) {
    const firstProgressionElement = getRandomNumber(100);
    const progressionStep = getRandomNumber(10);
    const progression = prepareProgression(firstProgressionElement, progressionStep);
    const hideElement = getRandomNumber(10) - 1;
    const userAnswer = askAndGetAnswer(prepareQuestionMessage(progression, hideElement));
    const rightAnswer = progression[hideElement];
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

export default brainProgression;
