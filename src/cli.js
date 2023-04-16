// const readlineSync = require('readline-sync');
import * as readlineSync from 'readline-sync';

export const getUserName = () => readlineSync.question('May I have your name? ');
