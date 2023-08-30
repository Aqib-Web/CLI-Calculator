#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { createSpinner } from "nanospinner";
import figlet from "figlet";
import gradient from "gradient-string";
async function welcome() {
    figlet(`Calculator + - x ÷`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + "\n");
    });
    await sleep(1800);
    const rainbowTitle = chalkAnimation.rainbow("\t\t\t🌟 Welcome to the CLI Calculator! 🌟 \n");
    await sleep(2000);
    rainbowTitle.stop();
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function question() {
    const answer = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select the operation you want to perform:\n",
            choices: [
                "Addition ➕",
                "Subtraction ➖",
                "Multiplication ✖️",
                "Division ➗",
                "Custom Expression 👾",
            ],
        },
        {
            name: "num1",
            type: "number",
            message: `🔢 Enter the first number ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation !== "Custom Expression 👾",
        },
        {
            name: "num2",
            type: "number",
            message: `🔢 Enter the second number ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation !== "Custom Expression 👾",
        },
        {
            name: "expression",
            type: "input",
            message: `🔢 Enter a custom expression ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation === "Custom Expression 👾",
        },
    ]);
    const spinner = createSpinner(`${gradient.summer("Calculating...\n")}`).start();
    await sleep(1000);
    spinner.success();
    if (answer.operation === "Addition ➕") {
        console.log(printAnswer(answer.num1 + answer.num2));
    }
    else if (answer.operation === "Subtraction ➖") {
        console.log(printAnswer(answer.num1 - answer.num2));
    }
    else if (answer.operation === "Multiplication ✖️") {
        console.log(printAnswer(answer.num1 * answer.num2));
    }
    else if (answer.operation === "Division ➗") {
        console.log(printAnswer(answer.num1 / answer.num2));
    }
    else if (answer.operation === "Custom Expression 👾") {
        const result = eval(answer.expression); // Use eval to evaluate the expression
        console.log(printAnswer(result));
    }
}
const printAnswer = function (result) {
    let concString = `${chalk.bold(gradient.cristal("✨  Result"))}  ${chalk.yellow("➤  ")} `;
    concString += chalk.white.bgGreen.bold(`   ${result}   `) + "\n";
    return concString;
};
// console.clear();
// await welcome();
// await question();
async function restartQuestion() {
    const answer = await inquirer.prompt([
        {
            name: "restart",
            type: "input",
            message: `🔄 Do you want to continue? (Y/N) ${chalk.yellow("➤")} `,
            validate: (input) => /^(y|n)$/i.test(input) || "Please enter Y or N",
        },
    ]);
    return answer.restart.toLowerCase() === "y";
}
console.clear();
await welcome();
async function startCalculator() {
    do {
        await question();
    } while (await restartQuestion());
}
// Run it with top-level await
startCalculator();
// console.clear();
// await welcome();
// await question();
// restartQuestion();
// var chalo = 6;
// async function startCalculator() {
//   do {
//     console.clear();
//     await welcome();
//     await question();
//   } while (chalo);
// }
// await startCalculator();
// // startCalculator();
// await restartQuestion();
