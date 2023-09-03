import chalk from "chalk";
import gradient from "gradient-string";
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { sleep } from "./welcome.js";
import { calculate, solveExpression } from "./calculate.js";
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
                if (isNaN(input)) {
                    return chalk.red.italic("Please enter a valid number ❌");
                }
                return true;
            },
        },
        {
            name: "num2",
            type: "number",
            message: `🔢 Enter the second number ${chalk.yellow("➤")} `,
            when: (answers) => answers.operation !== "Custom Expression 👾",
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.red.italic("❌ Please enter a valid number!");
                }
                return true;
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
                    : chalk.red.italic("❌ Please enter a valid math expression!");
            },
        },
    ]);
    const spinner = createSpinner(`${gradient.summer("Calculating...\n")}`).start();
    await sleep(1000);
    spinner.success();
    if (answer.operation === "Custom Expression 👾") {
        solveExpression(answer.expression);
    }
    else {
        calculate(answer.operation, answer.num1, answer.num2);
    }
}
export { question };
