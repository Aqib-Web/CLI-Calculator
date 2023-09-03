#!/usr/bin/env node

import { welcome, sleep } from "./modules/welcome.js";
import { restartQuestion } from "./modules/restartQuestion.js";
import { question } from "./modules/question.js";

console.clear();
await welcome();

async function startCalculator() {
  do {
    await question();
  } while (await restartQuestion());
}

startCalculator();
