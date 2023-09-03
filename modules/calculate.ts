import { stylizeAnswer, stylizeExpression } from "./stylizeAnswer.js";

const calculate = function (operation: string, num1: number, num2: number) {
  if (operation === "Addition ➕") {
    const theAnswer = num1 + num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Subtraction ➖") {
    const theAnswer = num1 - num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Multiplication ✖️") {
    const theAnswer = num1 * num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Division ➗") {
    const theAnswer = num1 / num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  }
};

const solveExpression = function (expression: string) {
  const theAnswer = eval(expression);
  console.log(stylizeExpression(theAnswer, expression));
};

export { solveExpression, calculate };
