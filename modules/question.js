import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { stylizeAnswer } from "./stylizeAnswer.js";
import { sleep } from "./welcome.js";
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
            validate: (input) => {
                const regex = /^\d+$/;
                return regex.test(input) ? true : chalk.red("Please enter a number ❌");
            },
        },
        {
            name: "num2",
            type: "number",
            message: `🔢 Enter the second number ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation !== "Custom Expression 👾",
            validate: (input) => {
                const regex = /^\d+$/;
                return regex.test(input) ? true : chalk.red("Please enter a number ❌");
            },
        },
        {
            name: "expression",
            type: "input",
            message: `🔢 Enter a custom expression ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation === "Custom Expression 👾",
            validate: (expression) => {
                const regex = /^[0-9\-+\/*()]*$/;
                return regex.test(expression)
                    ? true
                    : chalk.red("Please enter a valid math expression ❌");
            },
        },
    ]);
    const spinner = createSpinner(`${gradient.summer("Calculating...\n")}`).start();
    await sleep(1000);
    spinner.success();
    if (answer.operation === "Addition ➕") {
        console.log(stylizeAnswer(answer.num1 + answer.num2));
    }
    else if (answer.operation === "Subtraction ➖") {
        console.log(stylizeAnswer(answer.num1 - answer.num2));
    }
    else if (answer.operation === "Multiplication ✖️") {
        console.log(stylizeAnswer(answer.num1 * answer.num2));
    }
    else if (answer.operation === "Division ➗") {
        console.log(stylizeAnswer(answer.num1 / answer.num2));
    }
    else if (answer.operation === "Custom Expression 👾") {
        const result = eval(answer.expression);
        console.log(stylizeAnswer(result));
    }
}
export { question };
