import chalk from "chalk";
import gradient from "gradient-string";
const stylizeAnswer = function (
  result: number,
  num1: number,
  num2: number,
  operator: string
) {
  let concString = `${chalk.bold(
    gradient.cristal("✨  Result")
  )}  ${chalk.yellow("➤ ")} `;
  concString += chalk.bold(` ${num1} ${checkOperator(operator)} ${num2} = `);
  concString += chalk.white.bgGreen.bold(`   ${result}   `) + "\n";
  return concString;
};

const stylizeExpression = function (result: number, expression: string) {
  let concString = `${chalk.bold(
    gradient.cristal("✨  Result")
  )}  ${chalk.yellow("➤ ")} `;
  concString += chalk.bold(` ${expression} = `);
  concString += chalk.white.bgGreen.bold(`   ${result}   `) + "\n";
  return concString;
};

function checkOperator(operator: string) {
  if (operator === "Addition ➕") {
    return "+";
  } else if (operator === "Subtraction ➖") {
    return "−";
  } else if (operator === "Multiplication ✖️") {
    return "×";
  } else if (operator === "Division ➗") {
    return "÷";
  }
}

export { stylizeAnswer, stylizeExpression };
