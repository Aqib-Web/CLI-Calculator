import { stylizeAnswer, stylizeExpression } from "./stylizeAnswer.js";

let theAnswer: number;

const calculate = function (operation: string, num1: number, num2: number) {
  if (operation === "Addition ➕") {
    theAnswer = num1 + num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Subtraction ➖") {
    theAnswer = num1 - num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Multiplication ✖️") {
    theAnswer = num1 * num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  } else if (operation === "Division ➗") {
    theAnswer = num1 / num2;
    console.log(stylizeAnswer(theAnswer, num1, num2, operation));
  }
};

const solveExpression = function (expression: string) {
  theAnswer = eval(expression);
  console.log(stylizeExpression(theAnswer, expression));
};

export { solveExpression, calculate, theAnswer };
