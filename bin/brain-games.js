#!/usr/bin/env node

import { welcome, getUserAnswer, greeting } from '../index.js';

welcome();
const userName = getUserAnswer('May I have your name?');
greeting(userName);
