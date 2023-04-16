import * as readlineSync from 'readline-sync';

const getUserAnswer = (message) => readlineSync.question(`${message} `);

export default getUserAnswer;
