#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
//WELCOME TEXT
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("\t\t\t🌟 GUESSING GAME! 🌟 \n");
    await sleep(2000);
    rainbowTitle.stop();
}
let theNumber = Math.trunc(Math.random() * 20) + 1;
let score = 100;
let highscore = 0;
async function askQuestion() {
    const answer = await inquirer.prompt([
        {
            name: "restart",
            type: "input",
            message: `🔄 ${chalk.magenta("Guess any number between 1-20")} ${chalk.yellow("➤")} `,
            validate: (input) => /^[1-9]\d{0,1}$/.test(input) || "Please enter a number between 1-20",
        },
    ]);
    console.log("\n");
    return answer.restart.toLowerCase() === "y";
}
await askQuestion();
